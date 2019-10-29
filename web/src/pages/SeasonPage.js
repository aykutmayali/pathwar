import * as React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Page, Grid } from "tabler-react";
import { isNil } from "ramda";

import AllTeamsOnSeasonList from "../components/season/AllTeamsOnSeasonList"
import ChallengesCardPreview from "../components/challenges/ChallengeCardPreview";
import ValidationCouponStamp from "../components/coupon/ValidateCouponStampCard";
import {
  fetchChallenges as fetchChallengesAction ,
  fetchAllSeasonTeams as fetchAllSeasonTeamsAction
} from "../actions/seasons";

class SeasonPage extends React.Component {

    componentDidUpdate(prevProps) {
      const { fetchChallengesAction, fetchAllSeasonTeamsAction, seasons: { activeSeason } } = this.props;
      const { seasons: { activeSeason: prevActiveSeason } } = prevProps;

      if (isNil(prevActiveSeason) && activeSeason ) {
        fetchChallengesAction(activeSeason.id);
        fetchAllSeasonTeamsAction(activeSeason.id)
      }
    }

    render() {
        const { seasons: { activeSeason, activeChallenges, allTeamsOnSeason } } = this.props;
        const name = activeSeason ? activeSeason.name : undefined;

        return (
            <Page.Content title="Season" subTitle={name}>
                <Grid.Row>
                  <Grid.Col xs={12} sm={3} lg={3}>
                    <h3>Teams</h3>
                    <AllTeamsOnSeasonList activeSeason={activeSeason} allTeamsOnSeason={allTeamsOnSeason} />
                  </Grid.Col>
                  <Grid.Col xs={12} sm={6} lg={6}>
                    <h3>Challenges</h3>
                    <ChallengesCardPreview challenges={activeChallenges} />
                  </Grid.Col>
                  <Grid.Col xs={12} sm={3} lg={3}>
                    <h3>Actions</h3>
                    <ValidationCouponStamp />
                  </Grid.Col>
                </Grid.Row>
              </Page.Content>
          );
    }
}

SeasonPage.propTypes = {
    seasons: PropTypes.object,
    fetchChallengesAction: PropTypes.func
};

const mapStateToProps = state => ({
    seasons: state.seasons
});

const mapDispatchToProps = {
  fetchChallengesAction: (seasonID) => fetchChallengesAction(seasonID),
  fetchAllSeasonTeamsAction: (seasonID) => fetchAllSeasonTeamsAction(seasonID)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SeasonPage);
