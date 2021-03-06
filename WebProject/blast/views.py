from django.shortcuts import render
from .out import Blast
from .forms import UploadFileForm
from .models import meuarquivo
from django.http import HttpResponseRedirect
import os
import json
from . import views


def index(request):
    return render(request, 'blast/index.html')


def GetResponse(request):
    if request.POST.get('seqtxtBlast', False):  # SE seqtxtBlast ESTIVER SETADO
        arquivo_fasta = open(r"blast/out/query_blast.fasta", 'w+')
        arquivo_fasta.writelines(request.POST.get('seqtxtBlast'))
        arquivo_fasta.close()

    elif request.FILES['seqfileBlast']:  # SE seqfileBlast ESTIVER SETADO
        arquivo = request.FILES['seqfileBlast']
        fn = r"blast/out/" + os.path.basename(arquivo.name)
        open(fn, 'wb').write(arquivo.file.read())

        if os.path.exists(r"blast/out/query_blast.fasta"):
            os.remove(r"blast/out/query_blast.fasta")

        arquivo_enviado = UploadFileForm(request.POST, request.FILES)
        arquivo_enviado = request.FILES['seqfileBlast']
        upload_path = r"blast/out/" + arquivo_enviado.name

        # RENOMEADO O ARQUIVO CARREGADO
        os.rename(r"blast/out/" + arquivo_enviado.name, r"blast/out/query_blast.fasta")

    response = Blast.execute_blast(r"blast/out/query_blast.fasta", request.POST.get('progBlast'), request.POST.get('dbBlast'))

    context = {
        'object': response
    }
    return render(request, "blast/responseblast.html", context)
