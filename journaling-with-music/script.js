function viewEntry(id) {
    const entry = entries.find(e => e.id === id); // Find entry by ID
    document.getElementById('viewDateDisplay').innerText = `☕ Recorded on ${new Date(entry.date).toDateString()}`;
    document.getElementById('viewTextDisplay').innerText = entry.text;
    
    const musicDiv = document.getElementById('viewMusicDisplay');
    
    if(entry.hasMusic && entry.musicUrl) {
        // Converts standard link to embed
        let embedUrl = entry.musicUrl.replace("music.apple.com", "embed.music.apple.com");
        
        musicDiv.innerHTML = `
            <div style="margin-top: 20px; border: 2px solid var(--espresso); border-radius: 18px; overflow: hidden;">
                <iframe 
                    allow="autoplay *; encrypted-media *; fullscreen *;" 
                    frameborder="0" 
                    height="150" 
                    style="width:100%; max-width:660px; display:block;" 
                    src="${embedUrl}">
                </iframe>
            </div>`;
    } else {
        musicDiv.innerHTML = ''; // Clear if no music
    }

    document.getElementById('deleteBtn').onclick = () => deleteEntry(id); // Assign delete logic
    showScreen('screenView'); // Show the view screen
}