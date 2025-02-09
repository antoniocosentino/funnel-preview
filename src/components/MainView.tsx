import React from 'react';
import { useAppContext } from '../context/AppContext';
import PreviewMode from './PreviewMode';
import DragToUpload from './DragToUpload';

const MainView: React.FC = () => {

    const {
        isFileLoaded,
    } = useAppContext();

    const ComponentToRender = isFileLoaded ? PreviewMode : DragToUpload;

    return (
        <ComponentToRender />
    );
};

export default MainView;
