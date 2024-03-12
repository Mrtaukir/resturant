function cafe()
{
    let Qname=document.getElementById("pro").value
    let Qnum=document.getElementById("quantity").value
    let prize=null;
    switch(Qname)
    {
        case "Pizza":
            prize=Qnum*300;
            break;
        case "Sandwitch":
            prize=Qnum*200;
            break; 
        case "Burger":
            prize=Qnum*150;
            break;
        case "French":
            prize=Qnum*150;
            break;
        case "Butter":
            prize=Qnum*100;
            break;
        case "Ice-cream":
            prize=Qnum*50;
            break;
        case "Bread":
            prize=Qnum*70;
            break;
        case "Bonut":
            prize=Qnum*100;
            break;
        case "Chicken":
            prize=Qnum*500;
            break;       
    }
    document.getElementById("payment").value=`${prize}`
}



let input1=document.querySelector('.input1');
document.addEventListener('DOMContentLoaded', () => {
    const input1 = document.querySelector('.input1');
    const label1=document.querySelector('.item-label')
    const input2=document.querySelector('.input2');
    const label2=document.querySelector('.quantity-label');
    if (input1) {
        input1.addEventListener('input', () => {
            if(input1.value!=''){
                label1.style.cssText='top:0; z-index:20; background-color:white; color:blue';
                input1.style.cssText='border-color:blue;';
            }
        });
    } if(input2) {
        input2.addEventListener('input',()=>{
            if(input2.value!=''){
                label2.style.cssText='top:0; z-index:20; background-color:white; color:blue';
                input2.style.cssText='border-color:blue;';
            }
        });
    }
});

