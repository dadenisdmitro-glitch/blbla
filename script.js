// Small utilities: copy email and print (download PDF via print dialog)
document.addEventListener('DOMContentLoaded', function(){
  const emailEl = document.getElementById('email');
  const copyBtn = document.getElementById('copyEmail');
  const printBtn = document.getElementById('downloadPdf');
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  if(copyBtn && emailEl){
    copyBtn.addEventListener('click', async ()=>{
      const text = emailEl.textContent.trim();
      try{
        await navigator.clipboard.writeText(text);
        copyBtn.textContent = 'Afritað!';
        setTimeout(()=> copyBtn.textContent = 'Afrita netfang', 2000);
      }catch(e){
        console.error('copy failed', e);
        alert('Ekki tókst að afrita netfang.');
      }
    });
  }

  if(printBtn){
    printBtn.addEventListener('click', ()=>{
      window.print();
    });
  }
});
