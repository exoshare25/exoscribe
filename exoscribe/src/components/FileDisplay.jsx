import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function FileDisplay(props) {
    const { handleAudioReset, file, audioStream, handleFormSubmission } = props;
    const audioRef = useRef();

    useEffect(() => {
        if (!file && !audioStream) return;

        const objectURL = file 
            ? URL.createObjectURL(file) 
            : URL.createObjectURL(audioStream);

        if (audioRef.current) {
            audioRef.current.src = objectURL;
        }

        return () => {
            // Clean up the object URL
            URL.revokeObjectURL(objectURL);
        };
    }, [audioStream, file]);

    return (
        <main className='flex-1 p-4 flex flex-col gap-3 text-center sm:gap-4 justify-center pb-20 w-full max-w-prose mx-auto'>
            <h1 className='font-semibold text-4xl sm:text-5xl md:text-6xl'>
                My <span className='text-blue-400 font-bold'>File</span>
            </h1>
            <div className='flex flex-col text-left my-4'>
                <h3 className='font-semibold'>Name</h3>
                <p className='truncate'>{file ? file?.name : 'Custom audio'}</p>
            </div>
            <div className='flex flex-col mb-2'>
                <audio ref={audioRef} className='w-full' controls>
                    Oops! Your browser does not support the audio element.
                </audio>
            </div>
            <div className='flex items-center justify-between gap-4'>
                <button
                    onClick={handleAudioReset}
                    className='text-amber-700 hover:text-blue-600 duration-200'
                >
                    Reset
                </button>
                <button
                    onClick={handleFormSubmission}
                    className='specialBtn px-3 p-2 rounded-lg text-amber-400 flex items-center gap-2 font-medium'
                >
                    <p>Transcribe</p>
                    <i className='fa-solid fa-pen-nib'></i>
                </button>
            </div>
        </main>
    );
}

// Prop Types Validation
FileDisplay.propTypes = {
    handleAudioReset: PropTypes.func.isRequired,
    handleFormSubmission: PropTypes.func.isRequired,
    file: PropTypes.instanceOf(File),
    audioStream: PropTypes.instanceOf(Blob),
};
