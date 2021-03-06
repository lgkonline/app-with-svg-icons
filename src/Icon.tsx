import React from "react";

function Icon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"

            // Change width and height to 1em so the
            // icon will have the size as your font
            width="1em"
            height="1em"

            fillRule="evenodd"
            clipRule="evenodd"

            // Add fill="currentColor" so you can change
            // the icon color with CSS `color` property
            fill="currentColor"

            // I had to add `viewBox` to let the SVG
            // grow with width and height
            viewBox="0 0 24 24"
        >
            <path d="M21 11a1 1 0 10-2 0 1 1 0 002 0m3 .486c-1.184 2.03-3.29 4.081-5.66 5.323-1.336-1.272-2.096-2.957-2.103-4.777-.008-1.92.822-3.704 2.297-5.024 2.262.986 4.258 2.606 5.466 4.478m-6.63 5.774a9.989 9.989 0 01-1.861.573C14.388 19.181 12.713 20 10.222 20c-.387 0-.794-.02-1.222-.061a5.195 5.195 0 001.02-2.653C7.303 16.282 5.344 14.412 4 12.999c-1.038 1.175-2.432 2-4 2 1.07-1.891 1.111-4.711 0-6.998 1.353.021 3.001.89 4 1.999 1.381-1.2 3.282-2.661 6.008-3.441-.1-.828-.399-1.668-1.008-2.499.429-.04.837-.06 1.225-.06 2.467 0 4.135.801 5.256 2.128.68.107 1.357.272 2.019.495-1.453 1.469-2.271 3.37-2.263 5.413.008 1.969.773 3.799 2.133 5.224"></path>
        </svg>
    );
}

export default Icon;

