/**
 * Material-dark
 *
 * Author: Bartholomej
 * Website: https://github.com/bartholomej/material-dark
 * Docs: https://github.com/bartholomej/material-dark
 * Repo: https://github.com/bartholomej/material-dark
 * Issues: https://github.com/bartholomej/material-dark/issues
 */
interface MaterialdarkSettings {
    revealElement: 'body' | string;
    revealPosition: 'top' | 'bottom';
    padding: number;
    duration: number;
    easing: 'linear' | 'swing' | string;
    onScrollEnd: Function;
}
interface MaterialdarkRoot {
    btnClass: string;
    revealClass: string;
    revealElement: JQuery<HTMLElement>;
    btnElement: JQuery<HTMLElement>;
    initial: MaterialdarkSettings;
    options: MaterialdarkSettings;
}
interface JQuery {
    materialdark(): MaterialdarkSettings;
}
