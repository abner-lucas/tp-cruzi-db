from Bio.Blast.Applications import *
from Bio.Blast import NCBIXML


def execute_blast(filename, blast, subject):
#	path = "C:\\Program Files\\NCBI\\blast-2.11.0+\\bin\\"
#	files = {
#		"cds_from_genomic": "cds_from_genomic.fna",
#		"genomic": "genomic.fna",
#		"protein": "protein.faa",
#		"rna": "rna.fna",
#		"rna_from_genomic": "rna_from_genomic.fna"
#	}
#	comando_blastn = NcbiblastnCommandline(cmd=path+blast, \
#										   query=filename, subject="GCF_000209065.1_ASM20906v1_" + files.get(subject), \
#										   outfmt=5, out="out.xml")
#	print(comando_blastn)
#	comando_blastn()
	arquivo_xml = open("blast\out\out.xml", "r")
	dados = NCBIXML.parse(arquivo_xml)
	item = next(dados)

	i = 1

	items = list()

	for a in item.alignments:
		for hsp in a.hsps:
			alinhamento = {}
			alinhamento['alinhamento'] = i
			alinhamento['sequencia'] = a.title
			alinhamento['tamanho'] = a.length
			alinhamento['score'] = hsp.score
			alinhamento['gaps'] = hsp.gaps
			alinhamento['query'] = hsp.query
			alinhamento['match'] = hsp.match
			alinhamento['subject'] = hsp.sbjct
			items.append(alinhamento)
			i+=1


	return items

#print(execute_blast("exemplo.fasta", "blastn", "genomic"))