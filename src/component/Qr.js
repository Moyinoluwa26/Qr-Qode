import React, { useState } from 'react';

function QrComponent() {
    const [ImgText, SetImgText] = useState(''); // State to hold the input text
    const [Img, SetImg] = useState(false); // State to indicate if image is available
    const [isLoading, setIsLoading] = useState(false); // State to handle loading state
    const [imgSRC, SetImgSRC] = useState(''); // State to hold the image URL


    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission
        setIsLoading(true); // Set loading state to true
        try {
            const response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(ImgText)}`); // Fetch the QR code image
            if (!response.ok) {
                throw new Error('Failed to fetch QR code image');
            }
            const blob = await response.blob(); // Get the image as blob
            const url = URL.createObjectURL(blob); // Create a URL for the blob
            SetImgSRC(url); // Update the image URL
            SetImg(true); // Set Img state to true (image available)
        } catch (error) {
            console.error('Error:', error);
            alert(error)
        }
        setIsLoading(false); // Set loading state to false
        SetImgText(''); // Reset the input text

    };


    /*useEffect(() => {
        if (!ImgText) {
            SetImg(false); // Reset Img state if ImgText is empty
        }
    }, [ImgText]);*/

    return (
        <div>
            <form onSubmit={handleSubmit} className='m-auto'>
                <input
                    type="text"
                    value={ImgText}
                    onChange={(e) => SetImgText(e.target.value)}
                    placeholder="Enter your text"
                    required
                    disabled={isLoading} // Disable input field while loading
                    className='p-2 rounded-lg mx-2 border-2 mt-3 md:w-96 my-3'
                />
                {Img && <img src={imgSRC} alt="QR Code" className='mx-auto my-3' />}
                <button type="submit" disabled={isLoading} className='bg-yellow-500 text-white p-2 rounded-lg my-2 mx-2'>
                    {isLoading ? 'Converting Text ...' : 'Convert Text'}
                </button>
            </form>
        </div>
    );
}

export default QrComponent;