function toggleDetails(section) {
    section.classList.toggle("active");
  }
  
  
  async function loadCropData() {
    try {
      const res = await fetch('/api/crops');
      const data = await res.json();
      console.log('📊 Crop Data:', data);
      
    } catch (err) {
      console.error('Error loading crop data:', err);
    }
  }
  
  
  async function loadSchemes() {
    try {
      const res = await fetch('/api/schemes');
      const data = await res.json();
      console.log('🏛️ Schemes:', data);
      
    } catch (err) {
      console.error('Error loading schemes:', err);
    }
  }
  
 
  async function sendToChatbot(message) {
    try {
      const res = await fetch('/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      console.log('🤖 Chatbot reply:', data.reply);
      alert(`AI Chatbot: ${data.reply}`);
    } catch (err) {
      console.error('Error sending message to chatbot:', err);
    }
  }
  
  
  window.onload = () => {
    loadCropData();
    loadSchemes();
  
   
  };
  