/**
 * The examples provided by Facebook are for non-commercial testing and
 * evaluation purposes only.
 *
 * Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @flow
 */
'use strict';

var React = require('react-native');
var {
  ActivityIndicatorIOS,
  ListView,
  Platform,
  ProgressBarAndroid,
  StyleSheet,
  Text,
  View,
} = React;

var TimerMixin = require('react-timer-mixin');
var invariant = require('invariant');
var dismissKeyboard = require('dismissKeyboard');

var SearchBar = require('SearchBar');

var SearchScreen = React.createClass({
  mixins: [TimerMixin],
  timeoutID: (null: any),

  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      isLoading: false,
      isLoadingTail: false,
      dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3', 'row 3', 'row 3', 'row 3', 'row 3', 'row 3', 'row 3', 'row 3', 'row 3', 'row 3', 'row 3', 'row 3', 'row 3', 'row 3', 'row 3', 'row 3', 'row 3', 'row 3', 'row 3', 'row 3', 'row 3', 'row 3', 'row 3', 'row 3', 'row 3', 'row 3', 'row 3', 'row 3', 'row 3', 'row 3', 'row 3', 'row 3', 'row 3', 'row 3', 'row 3', 'row 3', 'row 3', 'row 3', 'row 3', 'row 3']),
      filter: '',
      queryNumber: 0,
    };
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text>SearchBar</Text>
        <SearchBar
            onSearchChange={this.onSearchChange}
            isLoading={this.state.isLoading}
        />
        <ListView
            ref="listview"
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  centerText: {
    alignItems: 'center',
  },
  noMoviesText: {
    marginTop: 80,
    color: '#888888',
  },
  separator: {
    height: 1,
    backgroundColor: '#eeeeee',
  },
  scrollSpinner: {
    marginVertical: 20,
  },
  rowSeparator: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: 1,
    marginLeft: 4,
  },
  rowSeparatorHide: {
    opacity: 0.0,
  },
});

module.exports = SearchScreen;
