    $(".header").load("../includes/navbar.html");
    $(".sidebar").load("../includes/sidebar.html");
    if($('#index').length>0){
        $('.loader1').ClassyLoader({
            speed: 40,
            diameter: 30,
            fontSize: '24px',
            fontFamily: 'Courier',
            fontColor: '#f05a70',
            lineColor: '#f05a70',
            percentage: 70,
            lineWidth: 10,
            start: 'top',
            remainingLineColor: 'rgba(200,200,200,0.1)'
        });
        $('.loader2').ClassyLoader({
            speed: 40,
            diameter: 30,
            fontSize: '24px',
            fontFamily: 'Courier',
            fontColor: '#f05a70',
            lineColor: '#f05a70',
            percentage: 40,
            lineWidth: 10,
            start: 'top',
            remainingLineColor: 'rgba(200,200,200,0.1)'
        });
        $('.loader3').ClassyLoader({
            speed: 40,
            diameter: 30,
            fontSize: '24px',
            fontFamily: 'Courier',
            fontColor: '#f05a70',
            lineColor: '#f05a70',
            percentage: 28,
            lineWidth: 10,
            start: 'top',
            remainingLineColor: 'rgba(200,200,200,0.1)'
        });
    
    
        $('.loader4').ClassyLoader({
            speed: 40,
            diameter: 30,
            fontSize: '24px',
            fontFamily: 'Courier',
            fontColor: '#f05a70',
            lineColor: '#f05a70',
            percentage: 70,
            lineWidth: 10,
            start: 'top',
            remainingLineColor: 'rgba(200,200,200,0.1)'
        });
        $('.loader5').ClassyLoader({
            speed: 40,
            diameter: 30,
            fontSize: '24px',
            fontFamily: 'Courier',
            fontColor: '#f05a70',
            lineColor: '#f05a70',
            percentage: 40,
            lineWidth: 10,
            start: 'top',
            remainingLineColor: 'rgba(200,200,200,0.1)'
        });
        $('.loader6').ClassyLoader({
            speed: 40,
            diameter: 30,
            fontSize: '24px',
            fontFamily: 'Courier',
            fontColor: '#f05a70',
            lineColor: '#f05a70',
            percentage: 28,
            lineWidth: 10,
            start: 'top',
            remainingLineColor: 'rgba(200,200,200,0.1)'
        });
    
    
        $('.loader7').ClassyLoader({
            speed: 40,
            diameter: 30,
            fontSize: '24px',
            fontFamily: 'Courier',
            fontColor: '#f05a70',
            lineColor: '#f05a70',
            percentage: 70,
            lineWidth: 10,
            start: 'top',
            remainingLineColor: 'rgba(200,200,200,0.1)'
        });
        $('.loader8').ClassyLoader({
            speed: 40,
            diameter: 30,
            fontSize: '24px',
            fontFamily: 'Courier',
            fontColor: '#f05a70',
            lineColor: '#f05a70',
            percentage: 40,
            lineWidth: 10,
            start: 'top',
            remainingLineColor: 'rgba(200,200,200,0.1)'
        });
        $('.loader9').ClassyLoader({
            speed: 40,
            diameter: 30,
            fontSize: '24px',
            fontFamily: 'Courier',
            fontColor: '#f05a70',
            lineColor: '#f05a70',
            percentage: 28,
            lineWidth: 10,
            start: 'top',
            remainingLineColor: 'rgba(200,200,200,0.1)'
        });
    }

    let data=[
        {
            'SNo':1,
            'Purpose':'Meeting',
            'Type':'By Flight',
            'Amount':3400,
            'TRIF': 'TYHG8857',
            'Route':'Del-Mum',
            'Req': '02/05/21',
            'Status':'Emp',
        },
        {
            'SNo':2,
            'Purpose':'Meeting',
            'Type':'By Flight',
            'Amount':3400,
            'TRIF': 'TYHG8857',
            'Route':'Del-Mum',
            'Req': '02/05/21',
            'Status':'Emp',
        },
        {
            'SNo':3,
            'Purpose':'Meeting',
            'Type':'By Flight',
            'Amount':3400,
            'TRIF': 'TYHG8857',
            'Route':'Del-Mum',
            'Req': '02/05/21',
            'Status':'Emp',
        },
        {
            'SNo':4,
            'Purpose':'Meeting',
            'Type':'By Flight',
            'Amount':3400,
            'TRIF': 'TYHG8857',
            'Route':'Del-Mum',
            'Req': '02/05/21',
            'Status':'Emp',
        },
        {
            'SNo':5,
            'Purpose':'Meeting',
            'Type':'By Taxi',
            'Amount':3200,
            'TRIF': 'TYHG8857',
            'Route':'Del-Mum',
            'Req': '02/05/21',
            'Status':'Emp',
        },
        {
            'SNo':4,
            'Purpose':'Meeting',
            'Type':'By Car',
            'Amount':5400,
            'TRIF': 'TYHG8857',
            'Route':'Del-Mum',
            'Req': '02/05/21',
            'Status':'Emp',
        }        
    ]
    if($('#travel_claim')){
        data.map(function(i){
            let action=` <a href="" class="mx-1"> <i class="fas fa-eye"></i></a>
            <a href="" class="mx-1"> <i class="fas fa-pencil-alt"></i></a>
            <a href="" class="mx-1"> <i class="fas fa-trash"></i></a>`
            document.querySelector('.tablebody').innerHTML+='<tr><td>'+i.SNo+'</td> <td>'+i.Purpose+'</td><td>'+i.Type+'</td><td>'+i.Amount+'</td><td>'+i.TRIF+'</td><td>'+i.Route+'</td><td>'+i.Req+'</td><td>'+i.Status+'</td> <td>'+action+'</td></tr>'
        })
    }
   