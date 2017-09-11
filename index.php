<?php
$algorithms = array(
	'svm' => 'SVM',
	'binarysvm' => 'Binary SVM',
	'perceptron' => 'Perceptron',
	'knn' => 'KNN',
);
?><html>
	<head>
		<script type="text/javascript" src="library/jquery/jquery.min.js"></script>
		<?php /*<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>*/ ?>

		<script type="text/javascript" src="jsmlt/lib/bundle.js"></script>

		<script type="text/javascript" src="assets/js/app.js"></script>

		<link rel="stylesheet" href="assets/css/screen.css?v=<?php echo time(); ?>" />

		<title>Visual Machine Learning: SVM</title>
	</head>
	<body>
		<div id="main">
			<div id="algorithm">
				<div id="canvas">
					<canvas width="500" height="500"></canvas>
				</div>
				<div id="controls">
					<form action="#">
						<div class="section">
							<ul>
								<?php for ( $i = 0; $i < 5; $i++ ) : ?>
									<li>
										<label for="new-data-class-<?php echo $i; ?>">
											<input type="radio" name="new-data-class" value="<?php echo $i; ?>" id="new-data-class-<?php echo $i; ?>" <?php if ( $i == 0 ) echo 'checked="checked"'; ?> />
											Class <?php echo $i; ?>
										</label>
									</li>
								<?php endfor; ?>
							</ul>
						</div>
						<div class="section">
							<ul>
								<?php $is_first = true; ?>
								<?php foreach ( $algorithms as $algorithm => $label ) : ?>
									<li>
										<label for="classifier-<?php echo $algorithm; ?>">
											<input type="radio" name="classifier" value="<?php echo $algorithm; ?>" id="classifier-<?php echo $algorithm; ?>" <?php if ( $is_first ) echo 'checked="checked"'; ?> />
											<?php echo $label; ?>
										</label>
										<?php $is_first = false; ?>
									</li>
								<?php endforeach; ?>
							</ul>
						</div>
						<div class="section">
							<input type="submit" name="run" value="Run algorithm" />
							<label for="instant-run">
								<input type="checkbox" name="instant-run" id="instant-run" checked="checked" />
								Run on status change
							</label>
						</div>
					</form>
				</div>
			</div>
			<div id="output">
				<div id="error">
					<div class="graph"></div>
				</div>
			</div>
		</div>
	</body>
</html>