from django.shortcuts import render, redirect
from .forms import DownloadForm
from django import forms
from django.http import FileResponse

def index(request):
    return render(request, 'download/index.html')


def page_objects(request):
    answer = request.GET['selectType']
    if answer == "2":
        return FileResponse(open('blast\out\GCF_000209065.1_ASM20906v1_rna.fna', 'rb'),as_attachment=True)
    elif answer == "3":
        return FileResponse(open('blast\out\GCF_000209065.1_ASM20906v1_protein.faa', 'rb'),as_attachment=True)
    else:
        return FileResponse(open('blast\out\GCF_000209065.1_ASM20906v1_cds_from_genomic.fna', 'rb'),as_attachment=True)