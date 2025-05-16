
import { Redirect } from 'expo-router';

export default function Index() {
    console.log('👉 index.jsx rendered');
    return <Redirect href="/splash" />;
    // return <Redirect href="/MapScreen" />;

}