import React from 'react';

function TrustedBy() {
    return (
        <div className="flex flex-col items-center justify-center mt-96 md:-mt-96 py-20 md:-py-80 bg-neutral-900">
            <h3 className="text-zinc-50 text-lg font-extrabold mb-4 md:mb-16 md:-ml-24">
                TRUSTED BY
            </h3>
            <div className="flex justify-center space-x-8 md:-ml-24">
                <img
                    src="Microsoft.png"
                    alt="microsoft"
                    className="w-20 h-auto md:w-96 md:h-auto max-w-[140px] max-h-[30px]"
                />
                <img
                    src="AutomatticLogo.png"
                    alt="Automattic"
                    className="w-32 h-auto md:w-96 md:h-auto max-w-[250px] max-h-[25px]"
                    />
                <img
                    src="Bissell.png"
                    alt="Bissell"
                    className="w-12 h-auto md:w-96 md:h-auto max-w-[60px] max-h-[140px]"
                />
                </div>
            </div>
    );
}

export default TrustedBy