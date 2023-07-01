import React, { useState, useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './Nextplay.css'



const Playlist = () => {

    const [selectedFile] = useState([]);
    const [selectedFileList] = useState([]);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isselected, setIsselected] = useState(false);
    const [StateRefesh, setStateRefesh] = useState(false);

    const handleFileChange = (event) => {
        const Filelength = event.target.files;


        for (let i = 0; i < Filelength.length; i++) {
            const file = event.target.files[i];
            const ogfile = event.target.files[i].name;
            const tempurl = URL.createObjectURL(file);

            selectedFile[i] = tempurl;
            selectedFileList[i] = ogfile;
        }
        setStateRefesh(true);
        setIsselected(true);

    };



    setTimeout(() => {
        if (StateRefesh) {
            setStateRefesh(false);
            console.log(StateRefesh)
        }
    }, 2000)


    // process
    useEffect(() => {

        const audioElement = document.getElementById('audioElement')

        const handleEnd = () => {


            if (currentSongIndex < selectedFile.length - 1) {
                setCurrentSongIndex(currentSongIndex + 1);
                var playPromise = audioElement.play();

                if (playPromise !== undefined) {
                    playPromise.then(_ => {
                        audioElement.play();
                    })
                        .catch(error => {
                            console.log(error)
                        });
                }
            } else {
                setIsPlaying(false);
                setCurrentSongIndex(0);
                if (playPromise !== undefined) {
                    playPromise.then(_ => {
                        audioElement.play();
                    })
                        .catch(error => {
                            console.log(error)
                        });
                }
            }
        };

        audioElement.addEventListener('ended', handleEnd);

        return () => {
            audioElement.removeEventListener('ended', handleEnd);
        };
    }, [currentSongIndex, selectedFile]);

    const playSong = () => {
        const audioElement = document.getElementById('audioElement')
        setIsPlaying(true);
        audioElement.play();
        console.log(audioElement.play());
        console.log(audioElement);
    }

    const pauseSong = () => {
        const audioElement = document.getElementById('audioElement')
        setIsPlaying(false);
        audioElement.pause();
    };

    const Nextsong = () => {
        setIsPlaying(true);
        if (currentSongIndex < selectedFile.length - 1) {
            setCurrentSongIndex(currentSongIndex + 1);
        }
        else {
            setCurrentSongIndex(0);
        }
    }


    return (

        <div className='container mt-5 text-center  text-success' id='playsongs'>
            {!isselected ? (
                <h1>Please Select Your Favorite Songs</h1>) : (<h1>Wow! You Selected Your Favorite Songs</h1>)
            }
            <input type="file" onChange={handleFileChange} multiple />
            {StateRefesh &&
                <p className='fw-bold text-warning '> Songs Selected Successfully</p>

            }
            <hr></hr>

            <h2 className='text-center display-2 text-danger'>Playlist</h2>
            <div className='text-center d-flex flex-row  gap-3 justify-content-center  mt-4 ' >
                {selectedFile && <> <ReactAudioPlayer id='audioElement' autoPlay src={selectedFile[currentSongIndex]} />
                </>}
                {isselected && <>{isPlaying ? (
                    <button onClick={pauseSong}>Pause</button>
                ) : (
                    <button onClick={playSong}>Play</button>
                )}
                    <button onClick={Nextsong} >Next Song</button>
                </>
                }
            </div>
            <div>
                {isselected &&
                    <>
                        <p className='mt-2 fs-4 fw-2'>{selectedFileList[currentSongIndex]}</p>
                    </>
                }
            </div>
        </div>
    );
};

export default Playlist;

