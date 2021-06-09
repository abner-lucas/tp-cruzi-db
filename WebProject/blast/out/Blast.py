from Bio.Blast.Applications import *
from Bio.Blast import NCBIXML
import json
import os
#
with open("blast/config.json") as json_data_file:
    data = json.load(json_data_file)

conf = data

def execute_blast(filename, blast, subject):
	path = conf['path']
	files = {
		"cds_from_genomic": "cds_from_genomic.fna",
		"genomic": "genomic.fna",
		"protein": "protein.faa",
		"rna": "rna.fna",
		"rna_from_genomic": "rna_from_genomic.fna"
	}
	comando_blastn = NcbiblastnCommandline(cmd=path+blast, \
										   query=filename, subject='blast/out/GCF_000209065.1_ASM20906v1_' + files.get(subject), \
										   outfmt=5, out='blast/out/result_blast.xml')

	
	arquivo_xml = open('blast/out/result_blast.xml', "r")
	dados = NCBIXML.parse(arquivo_xml)
	item = next(dados)

	i = 1

	itens = list()
	
	for a in item.alignments:
		for hsp in a.hsps:
			alinhamento = {}
			alinhamento['num'] = i
			alinhamento['sequencia'] = getProperty(a.title)
			alinhamento['tamanho'] = getProperty(a.length)
			alinhamento['score'] = getProperty(hsp.score)
			alinhamento['bits'] = getProperty(hsp.bits)
			alinhamento['expect'] = getProperty(f"{float(hsp.expect):.2e}")
			alinhamento['num_alignments'] = getProperty(hsp.num_alignments)
			alinhamento['identities'] = getProperty(hsp.identities)
			alinhamento['positives'] = getProperty(hsp.positives)
			alinhamento['gaps'] = getProperty(hsp.gaps)
			alinhamento['align_length'] = getProperty(hsp.align_length)
			alinhamento['strand'] = getProperty(hsp.strand)
			alinhamento['frame'] = getProperty(hsp.frame)
			alinhamento['query'] = getProperty(hsp.query)
			alinhamento['query_start'] = getProperty(hsp.query_start)
			alinhamento['query_end'] = getProperty(hsp.query_end)
			alinhamento['match'] = getProperty(hsp.match)
			alinhamento['subject'] = getProperty(hsp.sbjct)
			alinhamento['subject_start'] = getProperty(hsp.sbjct_start)
			alinhamento['subject_end'] = getProperty(hsp.sbjct_end)
			itens.append(alinhamento)
			i+=1

	return itens


def getProperty(property):
	return str(property).replace("None", "").replace("True", "true").replace("False", "");
