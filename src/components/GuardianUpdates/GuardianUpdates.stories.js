import React from "react";
import GuardianUpdates from "./GuardianUpdates";

const updatesFromGuardian = [
    { id: 1, title: "Marketing", link: 'Coronavirus and Market Volatility Playbook', content: 'Your resource of managing coronavirus and market volatility' },
    { id: 2, title: "New Feature", link: 'Financial Managemen Tool', content: 'Your resource of managing coronavirus and market volatility' },
    { id: 3, title: "Product Update", link: 'Bank Draft cutoff', content: 'Your resource of managing coronavirus and market volatility' },
]

export default {
    title: 'Updates from Guardian',
    component: GuardianUpdates,
};

const props = {
    data: updatesFromGuardian,
};

export const UpdatesFromGuardian = () => <GuardianUpdates {...props} />;

UpdatesFromGuardian.story = {
    name: 'Updates From Guardian'
};