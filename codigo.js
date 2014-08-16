            opt=['Piedra','Papel','Tijera','Lagarto','Spocke'] 
            wins=[ 
                [0,1,2,2,1], 
                [2,0,1,1,2], 
                [1,2,0,2,1], 
                [1,2,1,0,2], 
                [2,1,2,1,0], 
            ] 
 
            function PPTLS(o1,o2){ 
                if(o2==='random'){ 
                    o2=random() 
                    var r=' ('+opt[o2]+')' 
                } 
                switch(wins[o1][o2]){ 
                    case 0: return '¡Empate!';break; 
                    case 1: return '¡Pierdes!'+r;break; 
                    case 2: return '¡Ganas!'+r;break; 
                } 
            } 
            function random(){ 
                return Math.round((Math.random()*5)-0.5) 
            } 
