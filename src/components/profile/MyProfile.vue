<template v-if="loaded">
  <div class="my-profile">
    <div id="user-profile-2" class="user-profile">
      <div class="tabbable">
        <div class="tab-content no-border padding-24">
          <div id="home" class="tab-pane in active">
            <div class="row">
              <div class="col-xs-12 col-sm-3 center">
                <span class="profile-picture">
                <img class="editable img-responsive" alt=" Avatar" id="avatar2" src="http://bootdey.com/img/Content/avatar/avatar6.png">
                </span>
                <div class="space space-4"></div>
                <router-link to="/profile/step0" class="btn btn-sm btn-block btn-success">
                  <i class="ace-icon fa fa-plus-circle bigger-120"></i>
                  <span class="bigger-110">Update Profile</span>
                </router-link>
                <router-link to="/" class="btn btn-sm btn-block btn-primary">
                  <i class="ace-icon fa fa-envelope-o bigger-110"></i>
                  <span class="bigger-110">Go Home</span>
                </router-link>
              </div>
              <div class="col-xs-12 col-sm-9">
                <hr>
                <h1>{{info['given_name']}} {{info['middle_name']}} {{info['family_name']}}</h1>
                <hr>
                <div class="row">
                  <div class="col-5">
                    <h5>Basic Information</h5>
                    <div class="profile-user-info">
                      <div class="profile-info-row">
                        <div class="profile-info-name">Email</div>
                        <div class="profile-info-value">
                          <span>{{info['email']}}</span>
                        </div>
                      </div>
                      <div class="profile-info-row">
                        <div class="profile-info-name">Gender</div>
                        <div class="profile-info-value">
                          <span>{{info['gender']}}</span>
                        </div>
                      </div>
                      <div class="profile-info-row">
                        <div class="profile-info-name">Birth Date</div>
                        <div class="profile-info-value">
                          <span>{{info['custom:birth_date']}}</span>
                        </div>
                      </div>
                      <div class="profile-info-row">
                        <div class="profile-info-name">Country of Residence</div>
                        <div class="profile-info-value">
                          <span>{{info['custom:country_of_residence']}}</span>
                        </div>
                      </div>
                      <div class="profile-info-row">
                        <div class="profile-info-name">Country of Birth</div>
                        <div class="profile-info-value">
                          <span>{{info['custom:country_of_birth']}}</span>
                        </div>
                      </div>
                      <div class="profile-info-row">
                        <div class="profile-info-name">Occupation</div>
                        <div class="profile-info-value">
                          <span>{{info['custom:occupation']}}</span>
                        </div>
                      </div>
                      <div class="profile-info-row">
                        <div class="profile-info-name">Locality</div>
                        <div class="profile-info-value">
                          <span>{{info['custom:locality']}}</span>
                        </div>
                      </div>
                      <div class="profile-info-row">
                        <div class="profile-info-name">Status</div>
                        <div class="profile-info-value">
                          <span>{{info['custom:status']}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-7">
                    <h5>Additonal Information</h5>
                    <div class="profile-user-info">
                      <div class="profile-info-row">
                        <div class="profile-info-name">Mode of Travel</div>
                        <div class="profile-info-value">
                          <span>{{info['custom:mode_of_travel']}}</span>
                        </div>
                      </div>
                      <div class="profile-info-row">
                        <div class="profile-info-name">Purpose of Travel</div>
                        <div class="profile-info-value">
                          <span>{{info['custom:purpose_of_travel']}}</span>
                        </div>
                      </div>
                      <div class="profile-info-row">
                        <div class="profile-info-name">Number of Visits to Boracay</div>
                        <div class="profile-info-value">
                          <span>{{info['custom:num_visits_bora']}}</span>
                        </div>
                      </div>
                      <div class="profile-info-row">
                        <div class="profile-info-name">Length of Stay in Boracay</div>
                        <div class="profile-info-value">
                          <span>{{info['custom:len_stay_bora']}}</span>
                        </div>
                      </div>
                      <div class="profile-info-row">
                        <div class="profile-info-name">Package Tour</div>
                        <div class="profile-info-value">
                          <span>{{info['custom:package_tour']}}</span>
                        </div>
                      </div>
                      <div class="profile-info-row">
                        <div class="profile-info-name">Resort/Cottage Name/Address</div>
                        <div class="profile-info-value">
                          <span>{{info['custom:address_bora']}}</span>
                        </div>
                      </div>
                      <div class="profile-info-row">
                        <div class="profile-info-name">Place Visited Before Boracay</div>
                        <div class="profile-info-value">
                          <span>{{info['custom:place_vis_bef_bora']}}</span>
                        </div>
                      </div>
                      <div class="profile-info-row">
                        <div class="profile-info-name">Destination After Boracay</div>
                        <div class="profile-info-value">
                          <span>{{info['custom:dest_after_bora']}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr>
                <div v-if="info['custom:is_filipino_resident'] != 'True'" class="row">
                  <h5>Tourist's Information</h5>
                  <div class="profile-user-info">
                    <div class="profile-info-row">
                      <div class="profile-info-name">Passport Number</div>
                      <div class="profile-info-value">
                        <span>{{info['custom:passport_number']}}</span>
                      </div>
                    </div>
                    <div class="profile-info-row">
                      <div class="profile-info-name"> Place of Issue </div>
                      <div class="profile-info-value">
                        <span>{{info['custom:passport_place_issue']}}</span>
                      </div>
                    </div>
                    <div class="profile-info-row">
                      <div class="profile-info-name">Expiry Date</div>
                      <div class="profile-info-value">
                        <span>{{info['custom:passport_exp_date']}}</span>
                      </div>
                    </div>
                    <div class="profile-info-row">
                      <div class="profile-info-name">Country/Region</div>
                      <div class="profile-info-value">
                        <span>{{info['custom:f_country_region']}}</span>
                      </div>
                    </div>
                    <div class="profile-info-row">
                      <div class="profile-info-name">City/State</div>
                      <div class="profile-info-value">
                        <span>{{info['custom:f_city_state']}}</span>
                      </div>
                    </div>
                    <div class="profile-info-row">
                      <div class="profile-info-name">Address 1</div>
                      <div class="profile-info-value">
                        <span>{{info['custom:f_address_1']}}</span>
                      </div>
                    </div>
                    <div class="profile-info-row">
                      <div class="profile-info-name">Address 2</div>
                      <div class="profile-info-value">
                        <span>{{info['custom:f_address_2']}}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="hr hr-8 dotted"></div>
              </div>
            </div>
            <div class="space-20"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';
import * as AWS from 'aws-sdk';
var cognitoUserPoolId = process.env.VUE_APP_USER_POOL_ID;
var cognitoUserPoolClientId = process.env.VUE_APP_USER_POOL_CLIENT_ID; 
var awsRegion = process.env.VUE_APP_AWS_REGION;



export default {
  name: 'profile',
  components: {},
  data() {
    return {
      loaded: false,
      info: {}
    }
  },
  methods: {
    getUserData() {

      function fetchUserData(cognitoUser) {
        return new Promise(function(resolve, reject) {
          cognitoUser.getSession(function(err, session) {
            if (err) {
              alert('Fetch user data: ' + err);
              return;
            }
            console.log('session validity: ' + session.isValid());

            cognitoUser.getUserAttributes(function(err, result) {
              if (err) {
                console.log(err)
                alert(err);
                return;
              }
              resolve(result)
            });
          });
        });
      }


      var temp_info = {};

      var data = {
        UserPoolId: cognitoUserPoolId,
        ClientId: cognitoUserPoolClientId
      }


      var userPool = new AmazonCognitoIdentity.CognitoUserPool(data);
      var cognitoUser = userPool.getCurrentUser();
      console.log(cognitoUser);

      if (cognitoUser != null) {

        var user_data = fetchUserData(cognitoUser)
          .then(result => {

            // transform user attribute data into a dict
            for (var i = 0; i < result.length; i++) {
              let name = result[i].getName()
              let val = result[i].getValue()
              var obj = {
                [name]: val
              }
              $.extend(temp_info, obj)
            }

          }).then(res => {
            this.info = temp_info
          })
      }
    }
  },
  mounted() {
    this.getUserData()
  }
} 
</script>

<style scoped>
  body {
  margin-top: 20px;
  }
  .align-center,
  .center {
  text-align: center!important;
  }
  .profile-user-info {
  display: table;
  width: 98%;
  width: calc(100% - 24px);
  margin: 0 auto
  }
  .profile-info-row {
  display: table-row;
  }
  .profile-info-name,
  .profile-info-name2,
  .profile-info-value {
  display: table-cell;
  border-top: 1px dotted #D5E4F1
  }
  .profile-info-name {
  text-align: right;
  padding: 6px 10px 6px 4px;
  font-weight: 400;
  color: #667E99;
  background-color: transparent;
  width: 140px;
  vertical-align: middle
  }
  .profile-info-name2 {
  text-align: right;
  padding: 6px 10px 6px 4px;
  font-weight: 400;
  color: #667E99;
  background-color: transparent;
  width: 140px;
  vertical-align: middle
  }
  .profile-info-value {
  padding: 6px 4px 6px 6px
  }
  .profile-info-value>span+span:before {
  display: inline;
  content: ",";
  margin-left: 1px;
  margin-right: 3px;
  color: #666;
  border-bottom: 1px solid #FFF
  }
  .profile-info-value>span+span.editable-container:before {
  display: none
  }
  .profile-info-row:first-child .profile-info-name,
  .profile-info-row:first-child .profile-info-value {
  border-top: none
  }
  .profile-user-info-striped {
  border: 1px solid #DCEBF7
  }
  .profile-user-info-striped .profile-info-name {
  color: #336199;
  background-color: #EDF3F4;
  border-top: 1px solid #F7FBFF
  }
  .profile-user-info-striped .profile-info-value {
  border-top: 1px dotted #DCEBF7;
  padding-left: 12px
  }
  .profile-picture {
  border: 1px solid #CCC;
  background-color: #FFF;
  padding: 4px;
  display: inline-block;
  max-width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, .15)
  }
  .profile-picture img {
  display: inline-block;
  max-width: 100%;
  }
  .profile-contact-links {
  padding: 4px 2px 5px;
  border: 1px solid #E0E2E5;
  background-color: #F8FAFC
  }
  .btn-link:hover .ace-icon {
  text-decoration: none!important
  }
  .tab-content.profile-edit-tab-content {
  border: 1px solid #DDD;
  padding: 8px 32px 32px;
  -webkit-box-shadow: 1px 1px 0 0 rgba(0, 0, 0, .2);
  box-shadow: 1px 1px 0 0 rgba(0, 0, 0, .2);
  background-color: #FFF
  }
  @media only screen and (max-width:480px) {
  .profile-info-name {
  width: 80px
  }
  .profile-user-info-striped .profile-info-name {
  float: none;
  width: auto;
  text-align: left;
  padding: 6px 4px 6px 10px;
  display: block
  }
  .profile-user-info-striped .profile-info-value {
  margin-left: 10px;
  display: block
  }
  }
  .dialogs,
  .itemdiv {
  position: relative
  }
  .tab-content.no-border.padding-24 {
  padding: 24px
  }
</style>