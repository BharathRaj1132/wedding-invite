import { useEffect } from "react";
import { Howl } from "howler";

export default function MusicPlayer() {
  useEffect(() => {
    const sound = new Howl({
      src: ["/music/song.mp3"],
      loop: true,
      volume: 0.5,
    });

    // Play only after user interaction (browser rule)
    const startMusic = () => {
      sound.play();
      window.removeEventListener("click", startMusic);
    };

    window.addEventListener("click", startMusic);

    return () => sound.unload();
  }, []);

  return null;
}