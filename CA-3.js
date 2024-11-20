function updateClock(id, offset = null) {
    const now = new Date();
    let cityTime;
  
    if (offset !== null) {
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      cityTime = new Date(utc + (3600000 * offset));
    } else {
      cityTime = now; 
    }
  
    const hours = cityTime.getHours().toString().padStart(2, '0');
    const minutes = cityTime.getMinutes().toString().padStart(2, '0');
    const seconds = cityTime.getSeconds().toString().padStart(2, '0');
    
    document.getElementById(id).innerText = `${hours}:${minutes}:${seconds}`;
  }
  
  function updateWorldClock() {
    updateClock("time-local");      
    updateClock("time-ny", -4);     
    updateClock("time-london", 0);  
    updateClock("time-tokyo", 9);   
    updateClock("time-sydney", 11); 
  }
  
  setInterval(updateWorldClock, 1000);
  updateWorldClock(); 
  