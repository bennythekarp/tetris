import { useState, useEffect, useCallback } from 'react';

export const useGameStatus = rowsCleared => {
    const [score, setScore] = useState(0);
    const [rows, setRows] = useState(0);
    const [level, setLevel] = useState(0);

    const calcScore = useCallback(() => {
        const linePoints = [40, 100, 300, 1200];
        // check if we have a score
        if (rowsCleared > 0) {
            // this is how orig tetris score was calculated
            setScore(prev => prev + linePoints[rowsCleared - 1] * (level + 1));
            setRows(prev => prev + rowsCleared);
        }

    }, [level, rowsCleared]);

    useEffect(() => {
        calcScore();
    }, [calcScore, rowsCleared, score]);

    return [score, setScore, rows, setRows, level, setLevel];
}