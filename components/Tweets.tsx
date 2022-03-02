// @flow 
import * as React from 'react';
type Props = {
    children?: any;
    className: string;
    user: string;
};
export const Tweets = (props: Props) => {
    return (
        <div className={props.className}>
        <div id="Tweets" className="rounded-3xl overflow-scroll shadow-lg  border-2 border-prim1">
            <a className="twitter-timeline" data-theme="dark" href={`https://twitter.com/${props.user}?ref_src=twsrc%5Etfw`}>Tweets by TwitterDev</a> 
            <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        </div>
        </div>
    );
};