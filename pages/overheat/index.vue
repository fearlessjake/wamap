<template>
  <div class="overheat-page">
    <no-ssr>
      <v-container>
        <v-layout column justify-center align-center>
          <v-flex xs12 sm7>
            <v-expansion-panel :max-width="800" xs12 sm7>
              <v-expansion-panel-content>
                <div slot="header">More information
                  <v-icon>info</v-icon>
                </div>
                <v-card color="#4f4141">
                  <v-card-text class="text-xs-center">
                    <div>
                      This is very experimental, but based upon the post of
                      <a
                        href="https://www.worldsadrift.com/forums/topic/overheat-equation/"
                      >overheat equation</a> on the worlds adrift forums.
                      <br>With the chart below you can pinpoint how good or bad your engine is and which throttle is best to use with it.
                      <br>
                      <br>The overheat points are the increase of overheat your engine does across distance. So taken into account the weight and the actual knots your ship flies and/or engines that overheat faster then others, it is hard to make an exact math.
                      <br>
                      <br>So by all means, consider this an indication. If you see a lot of red on the chart and your 'zero point' throttle is below 50%, you have a bad engine :-)
                      <br>From my personal experience, engines with 15 overheat points or below at full throttle, are able to pass a sandwall without overheating.
                    </div>
                  </v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-flex>
          <br>
          <v-card>
            <v-card-actions align-center>
              <table>
                <tr>
                  <th colspan="2" style="align-text:center">Please fill in your engine properties</th>
                </tr>
                <tr>
                  <td>
                    <v-form ref="overheatCalculationForm" lazy-validation>
                      <v-list>
                        <v-list-tile>
                          <v-list-tile-title>Cooling Factor</v-list-tile-title>
                          <v-list-tile-action>
                            <v-input-number
                              v-model="coolingFactor"
                              :outline="false"
                              :min="0"
                              :max="100"
                              label="Your engine Cooling Factor"
                              @input="calculateOverheat"
                            />
                          </v-list-tile-action>
                        </v-list-tile>
                        <v-list-tile>
                          <v-list-tile-title>Power</v-list-tile-title>
                          <v-list-tile-action>
                            <v-input-number
                              v-model="power"
                              :outline="false"
                              :min="0"
                              :max="100"
                              label="Your engine Power"
                              @input="calculateOverheat"
                            />
                          </v-list-tile-action>
                        </v-list-tile>
                        <v-list-tile>
                          <v-list-tile-title>Overheat Limit</v-list-tile-title>
                          <v-list-tile-action>
                            <v-input-number
                              v-model="overheatLimit"
                              :outline="false"
                              :min="0"
                              :max="100"
                              label="Your engine Overheat Limit"
                              @input="calculateOverheat"
                            />
                          </v-list-tile-action>
                        </v-list-tile>
                        <!-- <v-list-tile>
                        <v-list-tile-title>
                          Current ship weight
                          <small>(check shipyard)</small>
                        </v-list-tile-title>
                        <v-list-tile-action>
                          <v-input-number
                            label="Your ship weight"
                            v-model="shipWeight"
                            :outline="false"
                            :min="0"
                            :max="100"
                          ></v-input-number>
                        </v-list-tile-action>
                      </v-list-tile>
                      <v-list-tile>
                        <v-list-tile-title>
                          Current ship speed in knots
                          <small>(if already engines on)</small>
                        </v-list-tile-title>
                        <v-list-tile-action>
                          <v-input-number
                            label="Your ship weight"
                            v-model="shipWeight"
                            :outline="false"
                            :min="0"
                            :max="100"
                          ></v-input-number>
                        </v-list-tile-action>
                      </v-list-tile>
                      <v-list-tile>
                        <v-list-tile-title>Amount of this type engine</v-list-tile-title>
                        <v-list-tile-action>
                          <v-input-number
                            label="Amount of this type engine"
                            v-model="shipWeight"
                            :outline="false"
                            :min="1"
                            :max="10"
                          ></v-input-number>
                        </v-list-tile-action>
                        </v-list-tile>-->
                      </v-list>
                    </v-form>
                  </td>
                </tr>
              </table>
            </v-card-actions>
          </v-card>
          <br>
          <v-flex xs12 sm7>
            <div class="chart-box" d-block>
              <overheat-chart :width="800" :height="400" :chart-data="datacollection"/>
              <h3 class="subheading text-xs-center">Throttle percentage ></h3>
            </div>
          </v-flex>
          <!-- <graph-bar
              class="graph-bar"
              :width="800"
              :height="400"
              :axis-min="axisMin"
              :axis-max="axisMax"
              :labels="labels"
              :values="values"
              :colors="[ '#3333FF', '#FF3333' ]"
              v-if="showGraph"
            >
              <note :text="'Overheat throttle chart (Higher is worse)'"></note>
              <tooltip :names="['Freezing factor','Overheating factor']" :position="'left'"></tooltip>
          </graph-bar>-->
          <!-- <graph-line-timerange
            :width="600"
            :height="200"
            :axis-min="0"
            :axis-max="100"
            :axis-reverse="false"
            :axis-format="'HH:mm'"
            :axis-interval="1000 * 60"
            :labels="labels"
            :values="values"
          >
            <note :text="'Overheat increase over time'"></note>
            <guideline :tooltip-x="true" :tooltip-y="true"></guideline>
          </graph-line-timerange>
          <graph-line-timerange
            :width="600"
            :height="200"
            :axis-min="0"
            :axis-max="100"
            :axis-reverse="false"
            :axis-format="'HH:mm'"
            :axis-interval="1000 * 60"
            :labels="labels"
            :values="values"
          >
            <note :text="'Throttle sweetspot to keep engine from overheating'"></note>
            <guideline :tooltip-x="true" :tooltip-y="true"></guideline>
          </graph-line-timerange>
          <graph-line-timerange
            :width="600"
            :height="200"
            :axis-min="0"
            :axis-max="100"
            :axis-reverse="false"
            :axis-format="'HH:mm'"
            :axis-interval="1000 * 60"
            :labels="labels"
            :values="values"
          >
            <note :text="'Travel distance before overheating'"></note>
            <guideline :tooltip-x="true" :tooltip-y="true"></guideline>
          </graph-line-timerange>-->
        </v-layout>
      </v-container>
    </no-ssr>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import OverheatChart from '~/components/OverheatChart.js';
export default {
  components: {
    OverheatChart
  },
  mounted () {
    this.$store.commit('setShowMapControls', false);
    this.$store.commit('setPageTitle', this.title);
    this.calculateOverheat();
  },
  methods: {
    fillData () {},
    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    },
    calculateOverheat () {
      let setLabels = [];
      let setFreezings = [];
      let setOverheats = [];
      let coolingFactorPercentage = this.coolingFactor / 100;
      let i;
      for (i = 0; i <= 20; i++) {
        let calculatedOverheat =
          (1 - coolingFactorPercentage) * this.power * (i * 0.05) -
          this.overheatLimit / 2;
        setLabels.push(i * 5 + '%');
        if (calculatedOverheat <= 0) {
          setFreezings.push(parseFloat(calculatedOverheat).toFixed(2));
          setOverheats.push(0);
        } else {
          setOverheats.push(parseFloat(calculatedOverheat).toFixed(2));
          setFreezings.push(0);
        }
      }
      this.axisMin = setFreezings[0];
      this.axisMax = setOverheats[19];
      this.datacollection = {
        labels: setLabels,
        datasets: [
          {
            label: 'Freeze point',
            backgroundColor: '#3333FF',
            data: setFreezings
          },
          {
            label: 'Overheat point',
            backgroundColor: '#FF3333',
            data: setOverheats
          }
        ]
      };
    }
  },
  head () {
    return { title: 'Cardinal Guild - ' + this.title };
  },
  data () {
    return {
      datacollection: null,
      showGraph: false,
      title: 'Overheat calculator',
      coolingFactor: 25,
      power: 50,
      overheatLimit: 50,
      maxThrottlePercentage: 0,
      axisMin: -50,
      axisMax: 50,
      shipWeight: 0,
      labels: null,
      values: null
    };
  }
};
</script>
<style lang="scss" scoped>
.chart-box {
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  display: block;
  color: black;
}
// .graph-bar {
//   width: 100%;
//   height: auto;
//   display: block;
//   svg {
//     width: 100%;
//     height: auto;
//     display: block;
//   }
// }
</style>

