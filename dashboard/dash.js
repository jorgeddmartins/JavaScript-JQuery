
$(function() {

	runAjax = {
		ajaxCall: function() {

			$.ajax({

				type: "GET",
				url: "assets/js/dashboard/dash.json",

				success: function(data) { columns.thiscolumn(data); }

			});

		}
	}

	runAjax.ajaxCall();


	columns = {
		thiscolumn: function(data) {

			columnTemp = '';

			for( i in data.dashColumn ) {

				columnTemp += '<div class="column-medium '+ data.dashColumn[i].widthClass +' colChart-' + data.dashColumn[i].id + '">';
				columnTemp += '<div class="topHeader">';
				columnTemp += '<span class="columnTitle">' + data.dashColumn[i].titleName + '</span>';
				columnTemp += '</div>';

				columnTemp += '<div class="bottomBody">';
				columnTemp += '<div class="bottomBody-in">';
				columnTemp += '<div class="half-gauge">';
				columnTemp += '<div class="half-gauge-box">';
				columnTemp += '<div class="half-chart"></div>';
				columnTemp += '<div class="half-chart-g ' + data.dashColumn[i].productClass + '"></div>';
				columnTemp += '</div>';
				columnTemp += '</div>';
				columnTemp += '</div>';
				columnTemp += '</div>';

				columnTemp += '</div>';

			}
			$(columnTemp).appendTo('.dashView .columnView');


			$('.columnMediumTrans .topHeader, .columnMediumTrans .bottomBody, .bigC .bottomBody').remove();


			subcolumnTemp = '';

			for( i in data.subdashColumn ) {

				subcolumnTemp += '<div class="subColumn-small subColumn_' + data.subdashColumn[i].id + ' ' + data.subdashColumn[i].marginClass + '">';
				subcolumnTemp += '<div class="topHeader">';
				subcolumnTemp += '<span class="columnTitle">' + data.subdashColumn[i].tittleName + '</span>';
				subcolumnTemp += '</div>';
				subcolumnTemp += '<div class="bottomBody">';
				subcolumnTemp += '<div class="bottomBody-in"></div>';
				subcolumnTemp += '</div>';
				subcolumnTemp += '</div>';
			}
			$(subcolumnTemp).appendTo('.columnMediumTrans');


			columnData = '';

			for( i in data.chartsVals ) {

				columnData += '@keyframes ' + data.chartsVals[i].classVal + ' {0% { transform: rotate(-45deg); } 100% { transform: rotate(' + data.chartsVals[i].dataVal + 'deg); } }';
				columnData += '@-webkit-keyframes ' + data.chartsVals[i].classVal + ' {0% { -webkit-transform: rotate(-45deg); } 100% { -webkit-transform: rotate(' + data.chartsVals[i].dataVal + 'deg); } }';
				columnData += '@-moz-keyframes ' + data.chartsVals[i].classVal + ' {0% { -moz-transform: rotate(-45deg); } 100% { -moz-transform: rotate(' + data.chartsVals[i].dataVal + 'deg); } }';

			}

			$columnstyle = '<style type="text/css">' + columnData + '</style>';
            $($columnstyle).appendTo(document.head);

		}
	}

});