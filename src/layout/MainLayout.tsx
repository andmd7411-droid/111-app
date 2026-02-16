import { Viewer3D } from '../components/Viewer3D';
import { Controls } from '../components/Controls';
import { Box } from 'lucide-react';

export const MainLayout = () => {
    return (
        <div className="flex flex-col h-screen bg-dark text-white">
            {/* Header */}
            <header className="h-14 border-b border-gray-700 flex items-center px-4 justify-between bg-dark-lighter z-10">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <Box className="w-5 h-5 text-white" />
                    </div>
                    <h1 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                        IMG2STL <span className="text-xs font-medium text-gray-400">PRO</span>
                    </h1>
                </div>

                <div className="flex items-center gap-4">
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="text-xs text-gray-500 hover:text-white transition-colors">
                        v1.0.0
                    </a>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex overflow-hidden">
                {/* 3D Viewer Area */}
                <div className="flex-1 relative">
                    <Viewer3D />

                    {/* Overlay hint if no image */}
                    <NoImageOverlay />
                </div>

                {/* Sidebar Controls */}
                <Controls />
            </main>
        </div>
    );
};

import { useAppStore } from '../store/AppContext';

const NoImageOverlay = () => {
    const { originalImage } = useAppStore();

    if (originalImage) return null;

    return (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex items-center justify-center z-10">
            <div className="bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 text-center">
                <p className="text-xl font-semibold text-gray-200">Start by uploading an image</p>
                <p className="text-sm text-gray-400">Use the panel on the right ➔</p>
            </div>
        </div>
    );
};
