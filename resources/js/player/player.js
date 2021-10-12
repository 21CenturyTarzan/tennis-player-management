import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Side from './side';

import PlayerInfo from './info';
import PlayerInfoEditor from './info/edit';
import PlayerGoal from './goal';
import PlayerGoalEditor from './goal/edit';
import PlayerMatch from './match';
import PlayerMatchEditor from './match/edit';
import PlayerResult from './result';
import PlayerResultEditor from './result/edit';

import Notification from '../components/notification';



export default class PlayerApp extends Component {
    render() {
        return (
        <main className="l-container meeting-consent">
            <BrowserRouter>
                <div className="l-content position-relative">
                    <Notification/>
                        <Switch>
                            <Route exact path="/player/info" component = {PlayerInfo} />
                            <Route exact path="/player/info/edit" component = {PlayerInfoEditor} />
                            <Route exact path="/player/goal" component = {PlayerGoal} />
                            <Route exact path="/player/goal/edit" component = {PlayerGoalEditor} />
                            <Route exact path="/player/match" component = {PlayerMatch} />
                            <Route exact path="/player/match/edit" component = {PlayerMatchEditor} />
                            <Route exact path="/player/result" component = {PlayerResult} />
                            <Route exact path="/player/result/edit" component = {PlayerResultEditor} />
                        </Switch>
                </div>
                <Side />
            </BrowserRouter>
        </main>
        );
    }
}