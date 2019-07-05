import React from 'react';
import { Grid } from 'semantic-ui-react';
import CleanupDetailsHeader from './CleanupDetailsHeader';
import CleanupDetailsInfo from './CleanupDetailsInfo';
import CleanupDetailsChat from './CleanupDetailsChat';
import CleanupDetailsSidebar from './CleanupDetailsSidebar';


const CleanupDetailsPage = () => {
	return (
		<Grid>
			<Grid.Column width={10}>
				<CleanupDetailsHeader />
				<CleanupDetailsInfo />
				<CleanupDetailsChat />
			</Grid.Column>
			<Grid.Column width={6}>
				<CleanupDetailsSidebar />
			</Grid.Column>
		</Grid>
	);
};

export default CleanupDetailsPage;
