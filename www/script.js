function openFactStats()
{
	window.alert("meme")
	//window.location = "http://www.lls.org/diseaseinformation/getinformationsupport/factsstatistics/";
}

//--------------------------------Chart Data--------------------------------\\

	 var pieDataLung = [
				{
					value: 80,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "NSC Lung Cancer"
				},
				{
					value: 15,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "SC Lung Cancer"
				},
				{
					value: 5,
					color: "#FDB45C",
					highlight: "#FFC870",
					label: "Lung Carcinoids"
				}
                

			];
			
			
			
				 var pieDataOral = [
				{
					value: 90,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "% of Squamous Cell Carcinomas"
				},
				{
					value: 5,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "% of Verrucous Carcinomas"
				},
				{
					value: 5,
					color: "#FDB45C",
					highlight: "#FFC870",
					label: "% of Others"
				}
                

			];
			
			 var pieDataColo = [
				{
					value: 95,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "% of Adenocarcinomas"
				},
				{
					value: 5,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "% of Others"
				}
                

				];
			
			
				 var pieDataBladder = [
				{
					value: 24,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "Percentage of Diagnoses - Females"
				},
				{
					value: 76,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "Percentage of Diagnoses - Males"
				}
                

				];
			

var lineChartDataLung = {
			labels : ["1993","1995","1997","1999","2001","2003","2005","2007","2009"],
			datasets : [
				{
					label: "Lung Cancer Mortality Rate",
					fillColor : "rgba(220,220,220,0.2)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(220,220,220,1)",
					data : [60,62,59,57,54,56,53,51,48]
				},
				
			]

		}

    var barChartDataMain = {
	labels : ["Motor Incidents","Diabetes","Stroke","Cancer","Accidents","Sucides","Homicides"],
		datasets : [
			    {
				fillColor : "#B71C1C",
				strokeColor : "rgba(220,220,220,0.8)",
				highlightFill: "#D32F2F",
				highlightStroke: "rgba(220,220,220,1)",
				data : [33783,73831,129756,585720,126438,39518,16238]
			    }    
			    ]
			}
			
			 var barChartDataColo = {
	labels : ["Stage I","Stage IIA","Stage IIB","Stage IIIA","Stage IIIB","Stage IIIC","Stage IV"],
		datasets : [
			    {
				fillColor : "#B71C1C",
				strokeColor : "rgba(220,220,220,0.8)",
				highlightFill: "#D32F2F",
				highlightStroke: "rgba(220,220,220,1)",
				data : [92,87,63,89,69,53,11]
			    }    
			    ]
			}
	
    
    
    var barChartDataBrain = {
	labels : ["1-Year Survival","5-Year Survival","10-Year Survival"],
		datasets : [
			    {
				fillColor : "#B71C1C",
				strokeColor : "rgba(220,220,220,0.8)",
				highlightFill: "#D32F2F",
				highlightStroke: "rgba(220,220,220,1)",
				data : [40.1,18.5,13.5]
			    }    
			    ],
        equalBarWidth: [{
            width: 10
        }
    ]
			}
			
			    var barChartDataBladder = {
	labels : ["Stage 0","Stage I","Stage II", "Stage III", "Stage IV"],
		datasets : [
			    {
				fillColor : "#B71C1C",
				strokeColor : "rgba(220,220,220,0.8)",
				highlightFill: "#D32F2F",
				highlightStroke: "rgba(220,220,220,1)",
				data : [98,88,63, 46, 15]
			    }    
			    ],
        equalBarWidth: [{
            width: 10
        }
    ]
}
			
			
			
    var pieDataBrain = [
				{
					value: 33,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "% of Brain Cancer Patients who live past 5 years"
				},
				{
					value: 67,
                    color:"#F7464A",
					highlight: "#FF5A5E",
					label: "% of Brain Cancer Patients who die"
				}
			];
			
    var pieDataSkin = [
				{
					
					value: 25,
                    color: "#46BFBD",
					highlight: "#5AD3D1",	
					label: "% of deaths from Melanoma"
				},
				{
					
					value: 75,
					 color:"#F7464A",
					 highlight: "#FF5A5E",

					label: "% of deaths not from Melanoma"
					
				}
				];
			
		    

        


        
		var lineChartDataBrain = {
			labels : ["2004","2005","2006","2007","2008","2009","2010","2011","2012","2013"],
			datasets : [
				{
					label: "My First dataset",
					fillColor : "rgba(220,220,220,0.2)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(220,220,220,1)",
					data : [3.4,3.7,3.9,4.2,4.7,4.1,3.3,3.4,3.5,3.5,4]
				},
				
			]

		}
		
		

		var pieDataLeu = [
				{
					value: 16,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "Myeloma"
				},
				{
					value: 51,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "Lymphoma"
				},
				{
					value: 33,
					color: "#FDB45C",
					highlight: "#FFC870",
					label: "Leukemia"
				}
				

			];

			window.onload = function(){
				var ctx = document.getElementById("leuStatsPie").getContext("2d");
				window.myPie = new Chart(ctx).Pie(pieDataLeu);
                
                var ctx2 = document.getElementById("leuStatsLine").getContext("2d");
		window.myLine = new Chart(ctx2).Line(lineChartDataLeu, {
			responsive: true
		});
			};
		    

        
	var lineChartDataSkin = {
			labels : ["1975","1980","1985","1990","1995","2000","2005","2010"],
			datasets : [
				{
					label: "My First dataset",
					fillColor : "rgba(220,220,220,0.2)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(220,220,220,1)",
					data : [4,5,6.1,6.5,9,9.8,14,17]
				},
				
			]

		}
		
			var lineChartDataOral = {
			labels : ["1986", "1990", "1994", "1998", "2002", "2006"],
			datasets : [
				{
					label: "My First dataset",
					fillColor : "rgba(220,220,220,0.2)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(220,220,220,1)",
					data : [7.1, 7.8, 8.2, 8.6, 9.6, 10.7]
				},
				
			]

		}

        
		var lineChartDataLeu = {
			labels : ["1975","1980","1985","1990","1995","2000","2005","2010"],
			datasets : [
				{
					label: "My First dataset",
					fillColor : "rgba(220,220,220,0.2)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(220,220,220,1)",
					data : [8.1,8.4,8.1,8.0,7.9,7.7,7.3,6.9]
				},
				
			]

		}
        
        
        
        var pieDataBoobs = [
				{
					value: 0.5,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "Under Age 40"
				},
				{
					value: 22,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "Under Age 50"
				},
				{
					value: 35.5,
					color: "#FDB45C",
					highlight: "#FFC870",
					label: "Age 50 to Age 64"
				},
                {
					value: 42,
					color: "#607D8B",
					highlight: "#90A4AE",
					label: "Age 65 and Above"
				}
				

			];

			
		var lineChartDataBoobs = {
			labels : ["1980","1985","1990","1995","2000","2005","2010"],
			datasets : [
				{
					label: "Breast Cancer Mortality Rate",
					fillColor : "rgba(220,220,220,0.2)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(220,220,220,1)",
					data : [36,37,42,36,34,29,25]
				},
				
			]

		}
		
         var pieDataEye = [
				{
					value: 90,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "Intraocular Melanomas"
				},
				{
					value: 7,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "Intraocular Lymphomas"
				},
				{
					value: 3,
					color: "#FDB45C",
					highlight: "#FFC870",
					label: "Retinoblastomas"
				}
				

			];


var lineChartDataEye = {
			labels : ["1975","1980","1985","1990","1995","2000","2005","2010"],
			datasets : [
				{
					label: "Eye Cancer Survival Rate",
					fillColor : "rgba(220,220,220,0.2)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(220,220,220,1)",
					data : [68,70,75,72,76,79,81,85]
				},
				
			]

		}

var pieDataThyroid = [
				{
					value: 80,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "Papillary Carcinomas"
				},
				{
					value: 17,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "Follicular Carcinomas"
				},
				{
					value: 3,
					color: "#FDB45C",
					highlight: "#FFC870",
					label: "Hurthle Cell Carcinomas"
				}
                

			];

var lineChartDataThyroid = {
			labels: ["1973", "1976", "1979", "1982", "1985", "1988", "1991", "1994", "1997", "2000", "2003", "2006", "2009"],
    datasets: [
        {
            label: "Thyroid Cancer Incidence Rate",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [3.7, 4.5, 4.2, 3.5, 4.2, 4.7, 5.2, 5.6, 5.9, 6.2, 5.8, 6.4, 6.5]
        },
        {
            label: "Thyroid Cancer Mortality Rate",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [0.8, 0.9, 0.7, 0.8, 1, 0.9, 0.7, 0.8, 0.6, 0.7, 0.6, 0.5, 0.4]
        }
    ]
		}


var pieDataBone = [
				{
					value: 56,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "Osteosarcomas"
				},
				{
					value: 34,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "Ewing Tumors"
				},
				{
					value: 10,
					color: "#FDB45C",
					highlight: "#FFC870",
					label: "Chondrosarcomas"
				}
                

			];

var lineChartDataBone = {
			labels: ["1975", "1980", "1985", "1990", "1995", "2000", "2005", "2010"],
    datasets: [
        {
            label: "Bone Cancer Incidence Rate",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [0.8, 0.8, 0.9, 0.8, 1, 0.9, 1, 1.1]
        },
        {
            label: "Bone Cancer Mortality Rate",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [0.9, 0.6, 0.5, 0.4, 0.5, 0.4, 0.5, 0.4]
        }
    ]
		}


//--------------------------------End Chart Data--------------------------------\\
		    
		    
//--------------------------------Page References--------------------------------\\


function openDisease()
{
    window.location = "diseases.html";
}

function openHome()
{
    window.location = "index.html";
}

function openFAQ()
{
	window.location = "FAQ.html";
}

//--------------------------------End Page References--------------------------------\\


//--------------------------------Miscellaneous Functions--------------------------------\\

function cleanForm()
{
	document.getElementById("search-text").style.color = "black";
}

function addLink() {
    //Get the selected text and append the extra info
    var selection = window.getSelection(),
        pagelink = '<br /> --- <br /> Read more at: ' + "www.oursideurl.com",
        copytext = selection + pagelink,
        newdiv = document.createElement('div');

    //hide the newly created container
    newdiv.style.position = 'absolute';
    newdiv.style.left = '-99999px';

    //insert the container, fill it with the extended text, and define the new selection
    document.body.appendChild(newdiv);
    newdiv.innerHTML = copytext;
    selection.selectAllChildren(newdiv);

    window.setTimeout(function () {
        document.body.removeChild(newdiv);
    }, 100);
}

document.addEventListener('copy', addLink);





//--------------------------------End Miscellaneous Functions--------------------------------\\