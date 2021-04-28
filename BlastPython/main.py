from Bio.Blast.Applications import *
from Bio.Blast import NCBIXML

blastn = "C:\\Program Files\\NCBI\\blast-2.11.0+\\bin\\blastn"

comando_blastn = NcbiblastnCommandline(cmd=blastn, \
                                       query="exemplo.fasta", subject="GCF_000209065.1_ASM20906v1_genomic.fasta", \
                                       outfmt=5, out="out.xml")
print(comando_blastn)

# Executando
stdout, stderr = comando_blastn()

arquivo_xml = open("out.xml","r")
dados = NCBIXML.parse(arquivo_xml)
item = next(dados)

i = 1

for a in item.alignments:
	for hsp in a.hsps:
		print('Alinhamento',i)
		print('Sequencia: '+a.title)
		print('Tamanho: ',a.length)
		print('Score: ',hsp.score)
		print('Gaps: ',hsp.gaps)
		print(hsp.query )
		print(hsp.match)
		print(hsp.sbjct)
		print("\n")
		i+=1

print("Executado com sucesso." )