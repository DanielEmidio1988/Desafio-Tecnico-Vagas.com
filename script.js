const form = document.getElementById('form');
const qtdStickers = document.getElementById('input_qtd');
const btnLessStickers = document.getElementById('btn_less');
const btnMoreStickers = document.getElementById('btn_more');
const msgInputMsg = document.getElementById('msg_input_obs');
const inputMsg = document.getElementById('input_obs');
const btnSubmit = document.getElementById('button_submit_form');
const checkReact = document.getElementById('react');
const checkVue = document.getElementById('vue');
const checkAngular = document.getElementById('angular');
const checkStickers = document.querySelectorAll('.custom_input');
const msgSubmit = document.getElementById('msg_submit');


function checkQtdInputValue(){
    const qtdValueStickers = qtdStickers.value.replace(/\D/, '');
    qtdStickers.value = qtdValueStickers;
    const formatQtdStickers = parseInt(qtdValueStickers);
    console.log('formatQtdStickers', formatQtdStickers)

    if(formatQtdStickers < 1 || !formatQtdStickers){
        btnLessStickers.disabled = true;
        return
    }else{
        btnLessStickers.disabled = false;
    }
}

function updateQtdStickers(num){
    const qtdValueStickers = qtdStickers.value ? qtdStickers.value : 0;
    const formatQtdStickers = parseInt(qtdValueStickers);
    const totalValueStickers = formatQtdStickers + num;
    console.log('totalValueStickers', totalValueStickers)
    if(totalValueStickers < 1){
        qtdStickers.value = 0
        btnLessStickers.disabled = true;
        return
    }else{
        qtdStickers.value = totalValueStickers;
        btnLessStickers.disabled = false;
        qtdStickers.classList.remove('input_error');
        return
    }   
}

function submitForm(){
    const qtdValueStickers = qtdStickers.value;
    
    let submitForm = true;

    if(!qtdValueStickers){
        qtdStickers.classList.add('input_error')
        submitForm = false;
    }

    if(!checkReact.checked && !checkVue.checked && !checkAngular.checked){
        checkStickers.forEach((check)=>{
            check.classList.add('custom_error')
        })
        submitForm = false;
    }

    if(!submitForm){
        msgSubmit.classList.add('msg_error');
        msgSubmit.textContent = 'Por favor, preencha todos os dados!'
        return
    }

    msgInputMsg.textContent = 'Mensagem de Sucesso:';
    msgSubmit.textContent = 'Formulário enviado com sucesso!';
    inputMsg.style.display = 'none';
    msgSubmit.classList.remove('msg_error');

}

function updateCheckValue(){
    if(checkReact.checked || checkVue.checked || checkAngular.checked){
        checkStickers.forEach((check)=>{
            check.classList.remove('custom_error')
        })
    }
}


qtdStickers.addEventListener('input',(e)=>{
    checkQtdInputValue();
});

btnLessStickers.addEventListener('click', function(){
    updateQtdStickers(-1);
});

btnMoreStickers.addEventListener('click', function(){
    updateQtdStickers(1)
});

checkReact.addEventListener('click', updateCheckValue);
checkVue.addEventListener('click', updateCheckValue);
checkAngular.addEventListener('click', updateCheckValue);

form.addEventListener('submit', function(event){
    event.preventDefault();
    submitForm()
})

window.onload = function(){
    checkQtdInputValue();
}