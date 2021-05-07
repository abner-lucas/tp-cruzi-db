from django.shortcuts import render
from .out import Blast
from .forms import UploadFileForm
from .models import meuarquivo
from django.http import HttpResponseRedirect

def index(request):
    return render(request, 'blast/index.html')

def GetResponse(request):
    sequencia = request.POST.get('seqtxtBlast')
    response = Blast.execute_blast(sequencia, "blastn", "genomic")
    print(sequencia)
    context={
      'object': response
    }
    return render(request,"blast/responseblast.html", context)

def upload_file(request):
    form = UploadFileForm(request.POST, request.FILES)
    return render(request, 'upload.html', {'form': form})   