from django.shortcuts import render, redirect
from .forms import DownloadForm
from django import forms


def index(request):
    return render(request, 'download/index.html')


def page_objects(request):
    answer = request.GET['selectType']
    if answer == "2":
        return redirect('https://ftp.ncbi.nlm.nih.gov/genomes/all/GCF/000/209/065/GCF_000209065.1_ASM20906v1/GCF_000209065.1_ASM20906v1_rna.fna.gz')
    elif answer == "3":
        return redirect('https://ftp.ncbi.nlm.nih.gov/genomes/all/GCF/000/209/065/GCF_000209065.1_ASM20906v1/GCF_000209065.1_ASM20906v1_protein.faa.gz')
    else:
        return redirect('https://ftp.ncbi.nlm.nih.gov/genomes/all/GCF/000/209/065/GCF_000209065.1_ASM20906v1/GCF_000209065.1_ASM20906v1_genomic.fna.gz')