#import matplotlib.pyplot as plt
from Bio import SeqIO
from Bio import AlignIO
from Bio import Phylo
from Bio.Phylo.TreeConstruction import DistanceCalculator
from Bio.Phylo.TreeConstruction import DistanceTreeConstructor
from Bio.Align.Applications import ClustalwCommandline
import os
import csv

with open("blast/config.json") as json_data_file:
    data = json.load(json_data_file)

conf = data

pathProject = os.getcwd()
pathProject = pathProject + r'\WebProject\filogenia\backend'
print(pathProject)
def create_tree():
    
    sequences = []
    with open( pathProject + r'\tpOrganism\names_organisms.txt') as names:
        file_reader = csv.reader(names, delimiter=',')
        for row in file_reader:
            sequences.append(SeqIO.read(pathProject +  r"\tpOrganism\\" + row[0]+".fasta", "fasta"))

    # juntar as sequencias em um só arquivo para fazer o alinhamento
    sequence = SeqIO.write(sequences, pathProject + "\sequence.fasta", "fasta")
    
    # joga as sequencias sintetizadas em uma variável para ser lida pelo 
    # Algoritmo de Alinhamento Múltiplo (clustal)  
    in_file = pathProject + r'\sequence.fasta'

    clustalw_exe = conf["path"]

    # chama o clustal e tem como entrada as espécies (fasta)
    # e na saída teremos 2 arquivos .aln e .dnd (já alinhados)
    clustalw_cline = ClustalwCommandline(clustalw_exe, infile = in_file, type = 'DNA')

    assert os.path.isfile(clustalw_exe), "Clustal W nao esta funcionando..."

    stdout, stderr = clustalw_cline()
    #print(clustalw_cline)

    # leitura do alinhamento
    alinhamento = AlignIO.read(pathProject + r'\sequence.aln', 'clustal')
    #print(alinhamento)

    # para formar a árvore, calcula-se a distância entre as sequências (ou espécies), 
    # usando o modelo de identidade
    calculoDistancia = DistanceCalculator('identity')

    '''# matriz de distância 
    matrizDistancia = calculoDistancia.get_distance(alinhamento)
    print(matrizDistancia)'''

    # construtor da árvore
    construtor = DistanceTreeConstructor(calculoDistancia)
    especiesTree = construtor.build_tree(alinhamento)
    especiesTree.rooted = True

    #print("ARVORE DO CONSTRUTOR")
    #print(especiesTree)

    # salvar a árvore em um arquivo Newick
    Phylo.write(especiesTree, r'WebProject\paginas\static\sequenceTree.nwx', 'newick')

    '''# plota a árvore com o matplotlib
    fig = Phylo.draw(especiesTree)

    # criar árvore em formato ASCII
    Phylo.draw_ascii(especiesTree)

    # criar árvore de outra forma com dnd
    print("ARVORE DND")
    tree_dnd = Phylo.read(pathProject + r'\sequence.dnd', "newick")
    Phylo.draw_ascii(tree_dnd)'''

	#return itens

print(create_tree())
