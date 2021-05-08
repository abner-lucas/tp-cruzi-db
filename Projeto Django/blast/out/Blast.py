from Bio.Blast.Applications import *
from Bio.Blast import NCBIXML

def execute_blast(filename, blast, subject):
	path = "C:\\Program Files\\NCBI\\blast-2.11.0+\\bin\\"
	files = {
		"cds_from_genomic": "cds_from_genomic.fna",
		"genomic": "genomic.fna",
		"protein": "protein.faa",
		"rna": "rna.fna",
		"rna_from_genomic": "rna_from_genomic.fna"
	}
	comando_blastn = NcbiblastnCommandline(cmd=path+blast, \
										   query=filename, subject="blast\\out\\GCF_000209065.1_ASM20906v1_" + files.get(subject), \
										   outfmt=5, out="blast\\out\\result_blast.xml")
	#print(comando_blastn)
	comando_blastn()
	
	arquivo_xml = open("blast\\out\\result_blast.xml", "r")
	dados = NCBIXML.parse(arquivo_xml)
	item = next(dados)

	i = 1

	itens = list()
	
	for a in item.alignments:
		for hsp in a.hsps:
			alinhamento = {}
			alinhamento['num'] = i
			alinhamento['sequencia'] = a.title
			alinhamento['tamanho'] = a.length
			alinhamento['score'] = hsp.score
			alinhamento['bits'] = hsp.bits
			alinhamento['expect'] = f"{float(hsp.expect):.2e}"
			alinhamento['num_alignments'] = hsp.num_alignments 
			alinhamento['identities'] = hsp.identities 
			alinhamento['positives'] = hsp.positives
			alinhamento['gaps'] = hsp.gaps
			alinhamento['align_length'] = hsp.align_length
			alinhamento['strand'] = hsp.strand
			alinhamento['frame '] = hsp.frame
			alinhamento['query'] = hsp.query
			alinhamento['query_start'] = hsp.query_start 
			alinhamento['query_end'] = hsp.query_end
			alinhamento['match'] = hsp.match
			alinhamento['subject'] = hsp.sbjct
			alinhamento['subject_start'] = hsp.sbjct_start
			alinhamento['subject_end'] = hsp.sbjct_end
			itens.append(alinhamento)
			i+=1

	return itens

#print(execute_blast('Projeto Django\\blast\\out\\exemplo.fasta', 'blastn', 'genomic'))