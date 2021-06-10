function load() {

  var newick = Newick.parse("((Trypanosoma_cf._vespertilionis:0.13870,((((Trypanosoma_cruzi:0.05928,Trypanosoma_wauwau:0.02788)Inner1:0.01580,Trypanosoma_dionisii:0.02375)Inner2:0.27726,Trypanosoma_noyesi:0.01175)Inner3:0.26458,Trypanosoma_teixeirae:0.01885)Inner4:0.15111)Inner5:0.07219,Trypanosoma_vespertilionis:0.05619,Trypanosoma_erneyi:0.08454)Inner6:0.00000;")
  var newickNodes = []
  function buildNewickNodes(node, callback) {
  newickNodes.push(node)
  if (node.branchset) {
      for (var i=0; i < node.branchset.length; i++) {
      buildNewickNodes(node.branchset[i])
      }
  }
  }
  buildNewickNodes(newick)
          
  d3.phylogram.buildRadial('#radialtree', newick, {
  width: 400,
  skipLabels: true
  })
  
  d3.phylogram.build('#phylogram', newick, {
  width: 300,
  height: 400
  });
}