$(function() {

  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

  // Nobody wants to drain their cell battery rendering this.
  // The stylesheet kicks flat grey backgrond color.
  if (width < 800 ) return;

  // You may remeber this from CS classes I never attended.
  var shuffle = function (array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  // Not exactly free association
  var words = [
	  'Alternative Fees'
	, 'Asset Purchase'
	, 'Board Meeting'
	, 'Common Stock'
	, 'Confidentiality'
	, 'Conversion'
	, 'Convertible Note'
	, 'Data Security'
	, 'Delaware'
	, 'Developments'
	, 'Digital Native'
	, 'Earnout'
	, 'Exclusive Provider'
	, 'Exit Event'
	, 'FACTA'
	, 'Gramm-Leach-Bliley'
	, 'HIPAA'
	, 'Incorporation'
	, 'Indemnification'
	, 'Integrity'
	, 'Intellectual Property'
	, 'License Back'
	, 'Licensing'
	, 'Limited Liability Company'
	, 'Liquidation Preference'
	, 'Logistics'
	, 'Mergers and Acquisitions'
	, 'Minute Book'
	, 'Non-Compete'
	, 'OEM Agreement'
	, 'Open Source'
	, 'Option Plan'
	, 'Outsourcing'
	, 'Par Value'
	, 'Pay-to-Play'
	, 'Payment Systems'
	, 'Plain English'
	, 'Preferred Stock'
	, 'Privacy Law'
	, 'Purchase Price Adjustment'
	, 'Reorganization'
	, 'Reps and Warranties'
	, 'Reseller Agreement'
	, 'Section 368'
	, 'Section 83(b) Election'
	, 'Seed Round'
	, 'Series A'
	, 'Services Agreement'
	, 'Silicon Valley'
	, 'Software Integration'
	, 'Stock Certificate'
	, 'Restricted Stock'
	, 'Vesting Period'
	, 'One-Year Cliff'
	, 'Bridge Loan'
	, 'Stock Purchase'
	, 'Term Sheet'
	, 'Venture Capital'
	, 'Waiver'
	, 'White Label'
  ];

  var appendWords = function (words, rounds) {
    // Thank you, John Resig.
    var bg = document.getElementById('background'),
    fragment = document.createDocumentFragment();
    for (var round = 0; round < rounds; round++) {
      shuffle(words);
      for(var i = 0; i < words.length; i++) {
      fragment.appendChild(
        // Non-breaking and a regular space.
        document.createTextNode(words[i] + "  ")
      );
      }
    }
    bg.appendChild(fragment.cloneNode(true));
  };

  // Quintuple-stuffed!
  appendWords(words, 5);
});
