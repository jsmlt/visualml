if (true) {
	function isInstantRunActivated() {
		return jQuery('#instant-run').is(':checked');
	}

	function canvasClassify(canvas, dataset, classifierType) {
		// Train classifier
		let classifier = null;

		if (classifierType === 'knn') {
			classifier = new jsmlt.Classifier.KNN();
		}
		else if (classifierType === 'binarysvm') {
			classifier = new jsmlt.Classifier.BinarySVM({
				kernel: new jsmlt.Classification.GaussianKernel(0.5)
			});
			//classifier = new jsmlt.Classifier.SVMJS.SVM();
		}
		else if (classifierType === 'svm') {
			classifier = new jsmlt.Classifier.SVM({
				kernel: new jsmlt.Classification.GaussianKernel(0.5)
			});
		}
		else {
			classifier = new jsmlt.Classifier.Perceptron();
		}

		if (dataset.numDatapoints > 1) {
			classifier.train(dataset.getFeaturesArray(), dataset.getLabelsArray());

			//classifier.train(dataset.getFeaturesArray(), dataset.getLabelsArray().map((x) => x === "0" ? -1 : 1), {kernel: jsmlt.Classifier.SVMJS.makeRbfKernel(1)});
			//classifier.train(dataset.getFeaturesArray(), dataset.getLabelsArray().map((x) => x === "0" ? -1 : 1));

			if (classifierType === 'binarysvm' ) {
				dataset.getDataPoints().forEach((x, i) => {
					x.setMarked(classifier.supportVectors[i]);
				});
			}
		
			// Generate predictions for grid
			let boundaries = new jsmlt.Classification.Boundaries();
			canvas.setClassBoundaries(boundaries.calculateClassifierDecisionBoundaries(classifier, 51));
		}

		//canvas.multiWeights = classifier.classifiers.map((x) => x.weights);

		/*canvas.tmp.predFeatures = boundaries.getFeatures();
		canvas.tmp.predLabels = boundaries.getPredictions();

		// Show error chart
		let numErrors = classifier.numErrors;

		let xticksStepsize = 1;

		if (numErrors.length > 30) {
			xticksStepsize = 10;
		}
		else if (numErrors.length > 9) {
			xticksStepsize = 5;
		}

		let yticksInterval = 10;
		let maxNumErrors = Math.max.apply(null, numErrors);

		if (maxNumErrors < 5) {
			yticksInterval = 1;
		}
		else if (maxNumErrors < 10) {
			yticksInterval = 2;
		}
		else if (maxNumErrors < 20) {
			yticksInterval = 3;
		}
		else if (maxNumErrors < 35) {
			yticksInterval = 5;
		}

		let el = jQuery('#output #error .graph')[0];
		Highcharts.chart(el, {
			chart: {
				height: 200,
				animation: false,
				events: {
					load: function() {
						jQuery('.highcharts-yaxis-grid path:first').remove();
						jQuery('.highcharts-series .highcharts-graph').each(function() {
							jQuery(this).attr('id', 'tmp-stroke');

							// Path
							let elPath = document.createElementNS('http://www.w3.org/2000/svg', 'use');
							elPath.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#tmp-stroke');

							// Group
							let elGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
							jQuery(elGroup).attr('transform', jQuery(this).parents('.highcharts-series').attr('transform'));


							elGroup.append(elPath);
							
							jQuery(this).parents('svg').append(jQuery(elGroup));
						});
					}
				}
			},
			credits: {
				enabled: false
			},
			title: {
				text: null
			},
			legend: {
				floating: true,
				align: 'right',
				verticalAlign: 'top'
			},
			xAxis: {
				allowDecimals: false,
				lineWidth: 0,
				labels: {
					enabled: false
				},
				minorTickLength: 0,
				tickLength: 0
			},
			yAxis: {
				title: null,
				gridZIndex: 4,
				gridLineWidth: 1,
				gridLineColor: '#FFF',
				gridLineDashStyle: 'ShortDash',
				tickInterval: yticksInterval,
				lineWidth: 1,
				lineColor: '#CCC',
				//offset: -3,
				labels: {
				//	enabled: false
				},
				minorTickLength: 4,
				tickLength: 4,
				tickColor: '#CCC',
				tickWidth: 1
			},
			tooltip: {
				enabled: false,
				//headerFormat: null,
				//pointFormat: '<b>{point.y:,.0f}</b> errors after iteration {point.x}'
			},
			plotOptions: {
				area: {
					fillColor: '#fbe9ea',
					lineColor: '#c70505',
					//lineWidth: 0,
					marker: {
						enabled: false,
						states: {
							hover: {
								enabled: false
							}
						}
					},
					states: {
						hover: false
					}
				},
				line: {
					lineColor: '#c70505',
					lineWidth: 2,
					marker: {
						enabled: false,
						states: {
							hover: {
								enabled: false
							}
						}
					},
					states: {
						hover: false
					}
				}
			},
			series: [{
				data: numErrors,
				animation: false,
				type: 'area',
				color: '#c70505',
				name: '# misclassified points'
			}]
		});*/

		/*
		$('#output #error .graph canvas').replaceWith('<canvas width="400" height="200" />');
		new Chart($('#output #error .graph canvas')[0], {
			type: 'line',
			data: {
				datasets: [{
					label: '# misclassified points',
					data: numErrors.map((a, i) => ({ x: (i === 0 ? numErrors.length * 0.001 : 0) + i, y: a })),
					lineTension: 0,
					borderColor: '#c70505',
					backgroundColor: '#fbe9ea',
					pointBackgroundColor: '#d62728',
					pointRadius: (numErrors.length > 50) ? 0 : 1.5,
					pointBorderWidth: 3,
					borderWidth: 2
				}]
			},
			options: {
				animation: false,
				scales: {
					xAxes: [{
						ticks: {
							stepSize: xticksStepsize,
							autoSkip: false
						},
						gridLines: {
							drawOnChartArea: false,
							display: false
						},
						type: 'linear',
						display: true,
						position: 'bottom'
					}],
					yAxes: [{
						type: 'linear',
						gridLines: {
							//color: 'rgba(255,255,255,1)',
							color: 'rgba(0,0,0,1)',
							lineWidth: 5,
							drawTicks: false,
							drawBorder: false
						}
					}]
				}
			}
		});*/
	}

	/*let A = [1,2,3,4,5,6];
	let R = jsmlt.Math.LinAlg.reshape(A, [2,3]);
	console.log(R);*/

	jQuery(document).ready(function($) {
		// Create canvas
		let canvas = new jsmlt.UI.Canvas($('#canvas canvas')[0], {
			continuousClick: true
		});
		
		// Initialize dataset
		let dataset = new jsmlt.Data.Dataset();

		// Classifier type
		let classifierType = null;

		$('[name="classifier"]').click(function() {
			classifierType = $(this).val();

			if (dataset.numDataPoints() && isInstantRunActivated()) {
				canvasClassify(canvas, dataset, classifierType);
			}
		}).filter(':checked').trigger('click');

		// Handle canvas clicks
		canvas.addListener('click', function(x, y) {
			// Class index of new data point
			let classIndex = jQuery('[name="new-data-class"]:checked').val();

			// Add new data point
			let datapoint = dataset.addDatapoint([x,y]);
			datapoint.setClassIndex(classIndex);

			// Add newly added data point to canvas
			canvas.addDatapoint(datapoint);

			// Classifier
			if (isInstantRunActivated()) {
				canvasClassify(canvas, dataset, classifierType);
			}

			//canvas.contours = jsmlt.Classification.Boundaries.smoothContours(canvas.contours, 2);

			//canvas.setWeightVector(classifier.weights);

			let xF = x.toFixed(2);
			let yF = y.toFixed(2);
			
			//console.log(`${xF}, ${yF}: ${classIndex}`);
			//console.log(`Added data point ${xF}, ${yF} of class ${classIndex}`);
			//console.log(dataset);
		});

		$('[name="run"]').click(function(e) {
			e.preventDefault();
			canvasClassify(canvas, dataset, classifierType);
		});








		/*let datapoints = [
			[-0.66, 0.61, 0],
			[-0.66, 0.61, 0],
			[-0.72, 0.46, 0],
			[-0.74, 0.35, 0],
			[-0.76, 0.24, 0],
			[-0.75, 0.22, 0],
			[-0.68, 0.21, 0],
			[-0.83, -0.38, 1],
			[-0.83, -0.38, 1],
			[-0.83, -0.43, 1],
			[-0.80, -0.49, 1],
			[-0.77, -0.53, 1],
			[-0.72, -0.53, 1],
			[0.04, -0.52, 2],
			[0.04, -0.52, 2],
			[0.04, -0.54, 2],
			[0.02, -0.74, 2],
			[0.01, -0.91, 2],
			[0.04, -0.94, 2],
			[0.13, -0.93, 2],
			[0.95, 0.40, 4],
			[0.95, 0.40, 4],
			[0.83, 0.44, 4],
			[0.83, 0.44, 4],
			[0.57, 0.57, 4],
			[0.24, 0.88, 4],
			[-0.07, 0.90, 4],
			[0.38, 0.72, 4],
			[0.61, 0.52, 4],
			[0.78, 0.45, 4],
			[0.92, 0.28, 4],
			[0.97, 0.07, 4],
			[0.97, 0.07, 4],
			[0.79, 0.20, 4],
			[0.63, 0.42, 4],
			[0.52, 0.54, 4],
			[0.80, 0.30, 4],
			[0.93, 0.10, 4],
			[0.96, 0.10, 4]
		];

		for (let i = 0; i < datapoints.length; i++) {
			let datapoint = datapoints[i];

			// Add new data point
			let dp = dataset.addDatapoint([datapoint[0], datapoint[1]]);
			dp.setClassIndex(datapoint[2]);

			// Add newly added data point to canvas
			canvas.addDatapoint(dp);
		}

		// Train classifier
		/*let classifier = new jsmlt.Classification.Perceptron();
		classifier.train(dataset.getFeaturesArray(), dataset.getLabelsArray());
		[canvas.contours,canvas.predFeatures,canvas.predLabels] = jsmlt.Classification.Boundaries.getClassifierDecisionBoundaries(classifier, 51);*/
	});
}