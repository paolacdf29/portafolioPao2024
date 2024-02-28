// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getDatabase, ref, onValue, child, get } from 'firebase/database';
import { firebaseApp } from './firebase';
import { useState } from 'react';

export const useProjects = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [projects, setProjects] = useState([]);

    const getProjects = async () => {
        try {
            const database = getDatabase(firebaseApp);
            const proyectsRef = ref(database);
            setLoading(true);
            get(child(proyectsRef, 'proyectos'))
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        let projectsSnap = snapshot.val();
                        projectsSnap = projectsSnap.filter((project) => project);
                        setProjects([...projectsSnap]);
                    } else {
                        setError('No data available');
                    }
                })
                .catch((error) => {
                    setError(error);
                    console.error(error);
                });
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        error,
        projects,
        getProjects
    };
};
