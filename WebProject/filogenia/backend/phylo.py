import Bio as Bio
import matplotlib
import matplotlib.pyplot as plt
from Bio import SeqIO
from Bio import AlignIO
from Bio import Phylo
from Bio.Phylo.TreeConstruction import DistanceCalculator
from Bio.Phylo.TreeConstruction import DistanceTreeConstructor

print("teste")

# importa as sequências
s1 = SeqIO.read("seq1.fasta", "fasta")
s2 = SeqIO.read("seq2.fasta", "fasta")
s3 = SeqIO.read("seq3.fasta", "fasta")
s4 = SeqIO.read("seq4.fasta", "fasta")
s5 = SeqIO.read("seq5.fasta", "fasta")
s6 = SeqIO.read("seq6.fasta", "fasta")
s7 = SeqIO.read("seq7.fasta", "fasta")
s8 = SeqIO.read("seq8.fasta", "fasta")

# renomeia as sequências
s1.id = 'sequencia_1'
s2.id = 'sequencia_2'
s3.id = 'sequencia_3'
s4.id = 'sequencia_4'
s5.id = 'sequencia_5'
s6.id = 'sequencia_6'
s7.id = 'sequencia_7'
s8.id = 'sequencia_8'

# juntar as sequencias em um só arquivo para fazer o alinhamento
tpcruzi = SeqIO.write([s1,s2,s3,s4,s5,s6,s7,s8], "tpcruzi.fasta", "fasta")

# aqui usará um algoritmo de alinhamento no arquivo tpcruzi
# a saída será o arquivo 'tpcruzialinhamento.clw' (utilizou-se o clustal)
# https://www.ebi.ac.uk/Tools/msa/muscle/

#abre o arquivo de alinhamento como um objeto 'Bio.Align.MultipleSeqAlignment' 
with open("tpcruzialinhamento.clw", "r") as aln:
    alinhamento = AlignIO.read(aln, "clustal")

# para formar a árvore, calcula-se a distância entre as sequências (ou espécies), 
# usando o modelo de identidade
calculoDistancia = DistanceCalculator('identity')

# matriz de distância 
matrizDistancia = calculoDistancia.get_distance(alinhamento)
#print(matrizDistancia)

# construtor da árvore
construtor = DistanceTreeConstructor(calculoDistancia)
tpcruziTree = construtor.build_tree(alinhamento)
tpcruziTree.rooted = True
#print(tpcruziTree)

# salvar a árvore em um novo arquivo
Phylo.write(tpcruziTree, "tpcruzitree.xml", "phyloxml")

# criar uma árvore com o matplotlib
fig = Phylo.draw(tpcruziTree)

# criar árvore em formato ASCII
Phylo.draw_ascii(tpcruziTree)


