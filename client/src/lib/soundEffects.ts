/**
 * Generate and play "POW!" sound effect using Web Audio API
 */
export function playPowSound() {
  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    // Create oscillator for the main "pow" sound
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Configure the sound - quick punch/impact effect
    oscillator.type = 'square';
    oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(50, audioContext.currentTime + 0.1);
    
    // Volume envelope - quick attack and decay
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
    
    // Play the sound
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.15);
  } catch (error) {
    console.warn('Could not play sound effect:', error);
  }
}

/**
 * Generate and play magical twinkle chime sound effect using Web Audio API
 */
export function playTwinkleSound() {
  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    // Create multiple oscillators for a magical bell-like sound
    const frequencies = [800, 1000, 1200, 1500]; // Bell harmonics
    const now = audioContext.currentTime;
    
    frequencies.forEach((freq, index) => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      // Use sine wave for a pure, magical tone
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(freq, now);
      
      // Stagger the notes slightly for a cascading twinkle effect
      const startTime = now + (index * 0.05);
      const duration = 0.4;
      
      // Gentle attack and decay for a soft, magical sound
      gainNode.gain.setValueAtTime(0, startTime);
      gainNode.gain.linearRampToValueAtTime(0.1, startTime + 0.02);
      gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration);
      
      oscillator.start(startTime);
      oscillator.stop(startTime + duration);
    });
  } catch (error) {
    console.warn('Could not play twinkle sound effect:', error);
  }
}
