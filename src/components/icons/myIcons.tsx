import React, {CSSProperties} from "react";

export type IconName =
    'gear'
    | 'plus'
    | 'refresh'
    | 'eye-slashed'
    | 'heart'
    | 'heart_empty'
    | 'download'
    | 'chevron-right'
    | 'chevron-double-right'
    | 'chevron-left'
    | 'chevron-double-left'
    | 'share'
    | 'trash'
    | 'x'
    | 'comment'
    | 'image'
    | 'seed'
    | 'no-symbol'
    | 'star'
    | 'bell'
    | 'question-mark'
    | 'pencil'
    | 'sun'
    | 'moon'
    | 'present'
    | 'more'
    | 'camera'
    | 'credit-card'
    | 'crown'

type IconElements = {
    [key in IconName]: {
        viewBox: string,
        path: React.ReactElement,
        strokeWidth?: number
    }
};

const myIcons: IconElements = {
    'crown': {
        viewBox: '0 0 267.5 267.5',
        path: (
            <path d="M256.975,100.34c0.041,0.736-0.013,1.485-0.198,2.229l-16.5,66c-0.832,3.325-3.812,5.663-7.238,5.681l-99,0.5
	c-0.013,0-0.025,0-0.038,0H35c-3.444,0-6.445-2.346-7.277-5.688l-16.5-66.25c-0.19-0.764-0.245-1.534-0.197-2.289
	C4.643,98.512,0,92.539,0,85.5c0-8.685,7.065-15.75,15.75-15.75S31.5,76.815,31.5,85.5c0,4.891-2.241,9.267-5.75,12.158
	l20.658,20.814c5.221,5.261,12.466,8.277,19.878,8.277c8.764,0,17.12-4.162,22.382-11.135l33.95-44.984
	C119.766,67.78,118,63.842,118,59.5c0-8.685,7.065-15.75,15.75-15.75s15.75,7.065,15.75,15.75c0,4.212-1.672,8.035-4.375,10.864
	c0.009,0.012,0.02,0.022,0.029,0.035l33.704,45.108c5.26,7.04,13.646,11.243,22.435,11.243c7.48,0,14.514-2.913,19.803-8.203
	l20.788-20.788C238.301,94.869,236,90.451,236,85.5c0-8.685,7.065-15.75,15.75-15.75s15.75,7.065,15.75,15.75
	C267.5,92.351,263.095,98.178,256.975,100.34z M238.667,198.25c0-4.142-3.358-7.5-7.5-7.5h-194c-4.142,0-7.5,3.358-7.5,7.5v18
	c0,4.142,3.358,7.5,7.5,7.5h194c4.142,0,7.5-3.358,7.5-7.5V198.25z"/>
        )

    },
    'more': {
        viewBox: '0 0 24 24',
        path: (
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"/>
        )
    },
    'present': {
        viewBox: '0 0 24 24',
        path: (
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"/>
        )
    },
    'question-mark': {
        viewBox: '0 0 24 24',
        path: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"/>
            </svg>
        )
    },
    'bell': {
        viewBox: '0 0 24 24',
        path: (
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/>

        )
    },
    'gear': {

        viewBox: '0 0 24 24',
        path: (
            <>
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            </>
        )
    },
    'plus': {
        viewBox: '0 0 24 24',
        path:
            (
                <>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                </>
            )
    },

    'refresh': {
        viewBox: '0 0 24 24',
        path: (
            <>
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/>
            </>
        )
    },
    'eye-slashed':
        {
            viewBox: '0 0 24 24',
            path: (
                <>
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"/>
                </>
            )
        }
    ,
    'heart': {
        strokeWidth: 0,
        viewBox: '0 0 24 24',
        path:
            (
                <>
                    <path
                        fill="#ff8787"
                        strokeLinecap="round" strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                </>
            )
    },
    'heart_empty': {
        strokeWidth: 1,
        viewBox: '0 0 24 24',
        path:
            (
                <>
                    <path
                        strokeLinecap="round" strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>

                </>
            )
    },
    'download': {
        viewBox: '0 0 24 24',
        path: (
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"/>
        )
    },
    'chevron-right': {
        strokeWidth: 1.0,
        viewBox: '0 0 24 24',
        path: (
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
        )
    },
    'chevron-double-left': {
        strokeWidth: 1.0,
        viewBox: '0 0 24 24',
        path: (
            <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"/>
        )
    },
    'chevron-double-right': {
        strokeWidth: 1.0,
        viewBox: '0 0 24 24',
        path: (

            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"/>

        )
    }
    ,
    'share': {
        viewBox: '0 0 24 24',
        path: (
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"/>
        )
    },
    'trash': {
        viewBox: '0 0 24 24',
        path: (
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>

        )
    },
    'x': {
        viewBox: '0 0 24 24',
        path: (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
        )
    },
    'comment': {
        viewBox: '0 0 24 24',
        path: (
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"/>
        )
    },
    'image': {
        viewBox: '0 0 24 24',
        path: (
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
        )
    },
    'chevron-left': {
        strokeWidth: 1.0,
        viewBox: '0 0 24 24',
        path: (
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
        )
    },
    'seed': {
        strokeWidth: 0,
        viewBox: '0 0 24 24',
        path: (
            <>
                <circle xmlns="http://www.w3.org/2000/svg" id="타원_3" data-name="타원 3" cx="12" cy="12" r="12"
                        fill="#e8f4fe"/>
                <g xmlns="http://www.w3.org/2000/svg" id="그룹_202374" data-name="그룹 202374"
                   transform="translate(-1796 -18)">
                    <path id="패스_224140" data-name="패스 224140"
                          d="M-9909.267-5736.436s-.571,8.009,7.188,6.316c.457-3.752-1.65-6.272-5.128-6.316Z"
                          transform="translate(11710 5761)" fill="none" stroke="#2194f1" strokeLinecap="round"
                          strokeWidth="1.2"/>
                    <path id="패스_224141" data-name="패스 224141"
                          d="M-9902.018-5728.08s-.106-5.328,4.882-5.194c1.717.065,2.609,0,2.609,0s.068,3.776-2.609,5.194A5.022,5.022,0,0,1-9902.018-5728.08Z"
                          transform="translate(11710 5761)" fill="none" stroke="#2194f1" strokeLinecap="round"
                          strokeWidth="1.2"/>
                    <path id="패스_224142" data-name="패스 224142" d="M-9902.018-5722.656v-7.463"
                          transform="translate(11710 5761)" fill="none" stroke="#2194f1" strokeLinecap="round"
                          strokeWidth="1.2"/>
                </g>
            </>

        )
    },
    'no-symbol': {
        viewBox: '0 0 24 24',
        path: <path strokeLinecap="round" strokeLinejoin="round"
                    d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>

    },
    'star': {
        viewBox: '0 0 24 24',
        path:
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/>


    },
    'pencil': {
        viewBox: '0 0 24 24',
        path:
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"/>


    },
    'sun': {
        viewBox: '0 0 24 24',
        path:
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/>
    },
    'moon': {
        viewBox: '0 0 24 24',
        path:
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"/>

    },
    'camera': {
        viewBox: '0 0 24 24',
        path: <>
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"/>
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"/>
        </>

    },
    'credit-card': {
        viewBox: '0 0 24 24',
        path: <>
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"/>

        </>
    }
}


interface IconProps {
    name: IconName;
    className?: string;
    strokeWidth?: number;
    strokeColor?: string;
    fill?: string;
    style?: CSSProperties;
}


export default function MyIcon(
    {
        name,
        className = "h-6 w-6",
        strokeWidth,
        strokeColor = "currentColor",
        fill = "none",
        style
    }: IconProps
) {

    const icon = myIcons[name];
    const {viewBox, path} = icon;
    const defaultStrokeWidth = icon.strokeWidth ?? 1.5;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={fill}
            style={style}
            viewBox={viewBox}
            className={className}
            strokeWidth={strokeWidth || defaultStrokeWidth}
            stroke={strokeColor || "currentColor"}
        >
            {path}
        </svg>
    );
}







