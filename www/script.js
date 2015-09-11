
function openFactStats()
{
	window.alert("great meme");
	window.alert("Ishan is a dip.");
	//window.location = "http://www.lls.org/diseaseinformation/getinformationsupport/factsstatistics/";
}

//--------------------------------Chart Data--------------------------------\\

	 var pieDataLung = [
				{
					value: 85,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "NSC Lung Cancer"
				},
				{
					value: 10,
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
			
			 var pieDataOvar = [
				{
					value: 66,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "Those who did not Survive Five Years"
				},
				{
					value: 44,
					
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "Those who Survived Five Years or more"
				}
				
                

				];
			
			var lineChartDataPancreas = {
			labels : ["1992","1994","1996","1998","2000","2002","2004","2006","2008","2010"],
			datasets : [
				{
					label: "Pancreatic Cancer Mortality Rate",
					fillColor : "rgba(220,220,220,0.2)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(220,220,220,1)",
					data : [5.6,5.4,5.1,4.8,4.5,4.3,4.2,3.8,3.5,3.4]
				},
				
			]

		}
		
		var pieDataEndo = [
				{
					value: 92,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "Endometrial Carcinomas"
				},
				{
					value: 8,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "Uterine Sarcomas"
				}
			];

		var lineChartDataEndo = {
					labels: ["1975", "1980", "1985", "1990", "1995", "2000", "2005", "2010"],
		    datasets: [
		        {
		            label: "Endometrial Cancer Death Rate",
		            fillColor: "rgba(220,220,220,0.2)",
		            strokeColor: "rgba(220,220,220,1)",
		            pointColor: "rgba(220,220,220,1)",
		            pointStrokeColor: "#fff",
		            pointHighlightFill: "#fff",
		            pointHighlightStroke: "rgba(220,220,220,1)",
		            data: [5.3, 5.2, 5.1, 4.8, 4.7, 4.8, 4.6, 4.5]
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
					value: 6,
					color: "#FDB45C",
					highlight: "#FFC870",
					label: "Chondrosarcomas"
				},
				{
					value: 4,
					color: "#0040FF",
					highlight: "#2E64FE",
					label: "Other"
				}
                

			];
			
			var pieDataLymphoma = [
				{
					value: 26,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "Prostate"
				},
				{
					value: 14,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "Lung and Bronchus"
				},
                {
					value: 8,
					color:"#FDB45C",
					highlight: "#FF5A5E",
					label: "Colon and Rectum"
				},
                {
					value: 7,
					color:"#1FDA9A",
					highlight: "#FF5A5E",
					label: "Urinary Bladder"
				},
                {
					value: 5,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "Melanoma of the Skin"
				},
                {
					value: 5,
					color:"#46BFBD",
					highlight: "#FF5A5E",
					label: "Non-Hodgkin's Lymphoma"
				},
                {
					value: 5,
					color:"#FDB45C",
					highlight: "#FF5A5E",
					label: "Kidney and Renal Pelvis"
				},
                {
					value: 4,
					color:"#1FDA9A",
					highlight: "#FF5A5E",
					label: "Oral Cavity and Pharynx"
				},
                {
					value: 4,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "Leukemia"
				},
                {
					value: 3,
					color:"#46BFBD",
					highlight: "#FF5A5E",
					label: "Liver and Intrahepatic Bile Duct"
				}
			];

var lineChartDataLymphoma = {
			labels: ["1990", "1995", "2000", "2005", "2010"],
    datasets: [
        {
            label: "NHL Death Rate",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [7.9, 8.7, 8.2, 6.9, 6.1]
        },
        {
            label: "HD Mortality Rate",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [0.7, 0.5, 0.5, 0.4, 0.3]
        }
    ]
}

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



var lineChartDataBalls = {
			labels: ["1975", "1980", "1985", "1990", "1995"],
    datasets: [
        {
            label: "Testicular Cancer Incidence Rate",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [3.3, 4.0, 4.1, 4.6, 4.9]
        },
        {
            label: "Testicular Cancer Mortality Rate",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [0.7, 0.4, 0.3, 0.2, 0.2]
        }
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

		
var pieDataPancreas = [
				{
					value: 95,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "Exocrine"
				},
				{
					value: 5,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "Endocrine"
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
			
			 var pieDataLiv = [
				{
					value: 58,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "Not Linked to Lifestyle Factors"
				},
				{
					value: 42,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "Linked to Lifestyle Factors"
				}
				
                

				];
			
			 var pieDataColo = [
				{
					value: 95,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "Adenocarcinomas"
				},
				{
					value: 5,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "Not Adenocarcinomas"
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
			
			 var barChartDataOvar = {
	labels : ["Stage I","Stage II","Stage III","Stage IV"],
		datasets : [
			    {
				fillColor : "#B71C1C",
				strokeColor : "rgba(220,220,220,0.8)",
				highlightFill: "#D32F2F",
				highlightStroke: "rgba(220,220,220,1)",
				data : [90,70,39,17]
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

		    var barChartDataLiv = {
	labels : ["Average","Localized","Regional","Distant"],
		datasets : [
			    {
				fillColor : "#B71C1C",
				strokeColor : "rgba(220,220,220,0.8)",
				highlightFill: "#D32F2F",
				highlightStroke: "rgba(220,220,220,1)",
				data : [15,28,7,2]
			    }    
			    ],
        equalBarWidth: [{
            width: 10
        }
    ]
}

			
			
			
    var pieDataBrain = [
				{
					value: 40.1,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "% of Brain Cancer Patients who survive past 5 years"
				},
				{
					value: 59.9,
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
			labels : ["1980","1985","1990","1995","2000","2003"],
			datasets : [
				{
					label: "Eye Cancer Survival Rate",
					fillColor : "rgba(220,220,220,0.2)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(220,220,220,1)",
					data : [76.3,83,83.9,77.2,89.2,89.5]
				},
				
			]
		}
//--------------------------------End Chart Data--------------------------------\\
		    
		    
//--------------------------------Page References--------------------------------\\


function openDisease()
{
    window.location = "diseases.html";
}

function openResources()
{
	window.location = "resources.html";
}

function openHome()
{
    window.location = "index.html";
}

function openFAQ()
{
	window.location = "FAQ.html";
}

function openResources()
{
	window.location = "resources.html";	
}

function openDonate()
{
	window.location = "donate.html";	
}

function openStories()
{
	window.location = "stories_page.html";
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

function launch_facebook(value)
{
	
	var num = Math.floor((Math.random() * 3) + 1);
	swal({   title: "Explore Further?",   text: "Clicking this button will take you to a random Facebook page that is related to the disease!",   type: "warning",   showCancelButton: true,  allowOutsideClick:true,  confirmButtonColor: "#81C784",   confirmButtonText: "Explore",   closeOnConfirm: false }, function(){  open_facebook(value, num); swal("Awesome!", "You have been redirected!", "success")});
		
}

function open_facebook(value, rand_roll)
{
	if(value == "bladder")
	{
		if(rand_roll == 1)
		{
			window.open("https://www.facebook.com/BladderCancer?fref=ts");
		}
		else if(rand_roll == 2)
		{
			window.open("https://www.facebook.com/pages/Bladder-cancer/110460062315595?fref=ts");
		}

		else if(rand_roll == 3)
		{
			window.open("https://www.facebook.com/BladderCancerCanada?fref=ts");
		}
	}	
	
	if(value == "blood")
	{
		if(rand_roll == 1)
		{
			window.open("https://www.facebook.com/pages/Leukemia/108610982497169?fref=ts");
		}
		else if(rand_roll == 2)
		{
			window.open("https://www.facebook.com/pages/Lymphoma/109453525747985?fref=ts");
		}

		else if(rand_roll == 3)
		{
			window.open("https://www.facebook.com/LLSforacure?fref=ts");
		}
	}
	
	if(value == "bone")
	{
		if(rand_roll == 1)
		{
			window.open("https://www.facebook.com/pages/Bone-tumor/112628532084463?fref=ts");
		}
		else if(rand_roll == 2)
		{
			window.open("https://www.facebook.com/pages/Bone-Cancer-Research-Trust/129310407213327?fref=ts");
		}

		else if(rand_roll == 3)
		{
			window.open("https://www.facebook.com/groups/341734433060/");
		}
	}
	
	if(value == "brain")
	{
		if(rand_roll == 1)
		{
			window.open("https://www.facebook.com/BrainCancerCure?fref=ts");
		}
		else if(rand_roll == 2)
		{
			window.open("https://www.facebook.com/curebraincancer?fref=ts");
		}

		else if(rand_roll == 3)
		{
			window.open("https://www.facebook.com/VoicesAgainstBrainCancer?fref=ts");
		}
	}
	
	if(value == "breast")
	{
		if(rand_roll == 1)
		{
			window.open("https://www.facebook.com/BreastCancerAwareness?fref=ts");
		}
		else if(rand_roll == 2)
		{
			window.open("https://www.facebook.com/BreastCancerNetworkAustralia?fref=ts");
		}

		else if(rand_roll == 3)
		{
			window.open("https://www.facebook.com/preventbreastcancer?fref=ts");
		}
	}
	
	if(value == "colo")
	{
		if(rand_roll == 1)
		{
			window.open("https://www.facebook.com/pages/Colorectal-cancer/108179699207156?fref=ts");
		}
		else if(rand_roll == 2)
		{
			window.open("https://www.facebook.com/Colorectal?fref=ts");
		}

		else if(rand_roll == 3)
		{
			window.open("https://www.facebook.com/FightCRC?fref=ts");
		}
	}
	
	if(value == "endo")
	{
		if(rand_roll == 1)
		{
			window.open("https://www.facebook.com/pages/Endometrial-cancer/137413716278690?fref=ts");
		}
		else if(rand_roll == 2)
		{
			window.open("https://www.facebook.com/groups/kickENDOcancerINtheFACE/");
		}

		else if(rand_roll == 3)
		{
			window.open("https://www.facebook.com/pages/Women-Cancer-Warriors/674251289312071?fref=ts");
		}
	}
	
	if(value == "eye")
	{
		if(rand_roll == 1)
		{
			window.open("https://www.facebook.com/pages/Childhood-Eye-Cancer-Trust-CHECT/123729324370622?fref=ts");
		}
		else if(rand_roll == 2)
		{
			window.open("https://www.facebook.com/EyeCancerHeroes?fref=ts");
		}

		else if(rand_roll == 3)
		{
			window.open("https://www.facebook.com/daisyfund?fref=ts");
		}
	}
	
	if(value == "liver")
	{
		if(rand_roll == 1)
		{
			window.open("https://www.facebook.com/pages/Liver-cancer/108228889209643?fref=ts");
		}
		else if(rand_roll == 2)
		{
			window.open("https://www.facebook.com/LiverCancerConnect?fref=ts");
		}

		else if(rand_roll == 3)
		{
			window.open("https://www.facebook.com/pages/Hepatocellular-carcinoma/112436695438510?fref=ts");
		}
	}
	
	if(value == "lung")
	{
		if(rand_roll == 1)
		{
			window.open("https://www.facebook.com/pages/Lung-cancer/113564751987617?fref=ts");
		}
		else if(rand_roll == 2)
		{
			window.open("https://www.facebook.com/pages/Lung-Cancer-Awareness/203133592589?fref=ts");
		}

		else if(rand_roll == 3)
		{
			window.open("https://www.facebook.com/lungcanceralliance?fref=ts");
		}
	}
	
	if(value == "oral")
	{
		if(rand_roll == 1)
		{
			window.open("https://www.facebook.com/oralcancerawarenesspage?fref=ts");
		}
		else if(rand_roll == 2)
		{
			window.open("https://www.facebook.com/pages/Oral-cancer/112779625403439?fref=ts");
		}

		else if(rand_roll == 3)
		{
			window.open("https://www.facebook.com/oralcancercause?fref=ts");
		}
	}
	
	if(value == "ovar")
	{
		if(rand_roll == 1)
		{
			window.open("https://www.facebook.com/pages/Ovarian-cancer/112347255447678?fref=ts");
		}
		else if(rand_roll == 2)
		{
			window.open("https://www.facebook.com/ovariancanceraction?fref=ts");
		}

		else if(rand_roll == 3)
		{
			window.open("https://www.facebook.com/OvarianCancerResearchFund?fref=ts");
		}
	}
	
	if(value == "panc")
	{
		if(rand_roll == 1)
		{
			window.open("https://www.facebook.com/JointheFight?fref=ts");
		}
		else if(rand_roll == 2)
		{
			window.open("https://www.facebook.com/CurePancreaticCancer?fref=ts");
		}

		else if(rand_roll == 3)
		{
			window.open("https://www.facebook.com/pages/Pancreatic-cancer/113135755367471?fref=ts");
		}
	}
	
	if(value == "skin")
	{
		if(rand_roll == 1)
		{
			window.open("https://www.facebook.com/SkinCancerAwareness?fref=ts");
		}
		else if(rand_roll == 2)
		{
			window.open("https://www.facebook.com/pages/Skin-cancer/105583619475390?fref=ts");
		}

		else if(rand_roll == 3)
		{
			window.open("https://www.facebook.com/pages/Surviving-Skin-Cancer/295414957288120?fref=ts");
		}
	}
	
	if(value == "thyroid")
	{
		if(rand_roll == 1)
		{
			window.open("https://www.facebook.com/thyroid.cancer.survivors?fref=ts");
		}
		else if(rand_roll == 2)
		{
			window.open("https://www.facebook.com/pages/Thyroid-cancer/108493132515628?fref=ts");
		}

		else if(rand_roll == 3)
		{
			window.open("https://www.facebook.com/pages/Thyroid-Cancer-Fighting/824662387596986?fref=ts");
		}
	}
}






//--------------------------------End Miscellaneous Functions--------------------------------\\