from django.shortcuts import render, redirect
from .forms import DownloadForm
from django import forms
from django.http import FileResponse
from django.contrib import messages


def index(request):
    return render(request, 'download/index.html')


def page_objects(request):
        answer = request.POST.get('selectType')
        if answer == "0":
            return render(request, 'download/index.html')
        if answer == "1":
            return FileResponse(open('paginas/static/DownloadFiles/GCF_000209065.1_ASM20906v1_rna.fna', 'rb'),as_attachment=True)

        elif answer == "2":
            return FileResponse(open('paginas/static/DownloadFiles/GCF_000209065.1_ASM20906v1_rna.zip', 'rb'),as_attachment=True)

        elif answer == "3":
            return FileResponse(open('paginas/static/DownloadFiles/GCF_000209065.1_ASM20906v1_protein.faa', 'rb'),as_attachment=True)
            
        elif answer == "4":
            return FileResponse(open('paginas/static/DownloadFiles/GCF_000209065.1_ASM20906v1_protein.gpff', 'rb'),as_attachment=True)
            
        elif answer == "5":
            return FileResponse(open('paginas/static/DownloadFiles/GCF_000209065.1_ASM20906v1_genomic.fna', 'rb'),as_attachment=True)
            
        elif answer == "6":
            return FileResponse(open('paginas/static/DownloadFiles/GCF_000209065.1_ASM20906v1_genomic.zip', 'rb'),as_attachment=True)
            
        elif answer == "7":
            return FileResponse(open('paginas/static/DownloadFiles/GCF_000209065.1_ASM20906v1_genomic.gtf', 'rb'),as_attachment=True)
            
        elif answer == "8":
            return FileResponse(open('paginas/static/DownloadFiles/GCF_000209065.1_ASM20906v1_genomic.gff', 'rb'),as_attachment=True)
        