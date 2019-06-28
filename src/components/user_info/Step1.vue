<template>
	<div class="user-step1">
      <div style="height: 8px; top: 71px;" class="progress rounded-0 sticky-top">
        <div role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" class="progress-bar"></div>
      </div>
      <section class="py-5">
      <div class="container">
        <p class="subtitle text-primary">Add new listing</p>
        <h1 class="h2 mb-5"> Basic information <span class="text-muted float-right">Step 1</span>      </h1>
        <form>
          <div class="row form-block">
            <div class="col-lg-4">
              <h4>Basic</h4>
              <p class="text-muted text-sm">His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table.</p>
            </div>
            <div class="col-lg-7 ml-auto">
              <div class="form-group"></div>
              <div class="form-group">
                <label for="form_name" class="form-label">Property name</label>
                <input name="name" id="form_name" class="form-control">
              </div>
              <div class="form-group">
                <label for="form_type" class="form-label">Home type</label>
                <select name="type" id="form_type" data-style="btn-selectpicker" title="" aria-describedby="propertyTypeHelp" class="selectpicker form-control">
                  <option value="type_0">Entire place                         </option>
                  <option value="type_1">Private room                         </option>
                  <option value="type_2">Shared room                         </option>
                </select><small id="propertyTypeHelp" class="form-text text-muted">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections</small>
              </div>
              <div class="form-group">
                <label class="form-label">Is your property set as a dedicated guest space?</label>
                <div class="custom-control custom-radio">
                  <input type="radio" id="guests_0" name="guests" class="custom-control-input">
                  <label for="guests_0" class="custom-control-label">Yes, it's primarily set up for guests</label>
                </div>
                <div class="custom-control custom-radio">
                  <input type="radio" id="guests_1" name="guests" class="custom-control-input">
                  <label for="guests_1" class="custom-control-label">No, I keep my personal belongings there</label>
                </div>
              </div>
            </div>
          </div>
          <div class="row form-block">
            <div class="col-lg-4">
              <h4>Location</h4>
              <p class="text-muted text-sm">Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.</p>
            </div>
            <div class="col-lg-7 ml-auto">
              <!-- Country-->
              <div class="form-group">
                <label for="form_country" class="form-label">Country / Region</label>
                <select name="country" id="form_country" data-style="btn-selectpicker" title=" " data-live-search="true" class="selectpicker form-control">
                  <option value="country_0">Afghanistan             </option>
                  <option value="country_1">Albania             </option>
                  <option value="country_2">Algeria             </option>
                  <option value="country_3">Andorra             </option>
                  <option value="country_4">Angola             </option>
                  <option value="country_5">Anguilla             </option>
                  <option value="country_6">Antigua &amp; Barbuda             </option>
                  <option value="country_7">Argentina             </option>
                  <option value="country_8">Armenia             </option>
                  <option value="country_9">Aruba             </option>
                  <option value="country_10">Australia             </option>
                  <option value="country_11">Austria             </option>
                  <option value="country_12">Azerbaijan             </option>
                  <option value="country_13">Bahamas             </option>
                  <option value="country_14">Bahrain             </option>
                  <option value="country_15">Bangladesh             </option>
                  <option value="country_16">Barbados             </option>
                  <option value="country_17">Belarus             </option>
                  <option value="country_18">Belgium             </option>
                  <option value="country_19">Belize             </option>
                  <option value="country_20">Benin             </option>
                  <option value="country_21">Bermuda             </option>
                  <option value="country_22">Bhutan             </option>
                  <option value="country_23">Bolivia             </option>
                  <option value="country_24">Bosnia &amp; Herzegovina             </option>
                  <option value="country_25">Botswana             </option>
                  <option value="country_26">Brazil             </option>
                  <option value="country_27">British Virgin Islands             </option>
                  <option value="country_28">Brunei             </option>
                  <option value="country_29">Bulgaria             </option>
                  <option value="country_30">Burkina Faso             </option>
                  <option value="country_31">Burundi             </option>
                  <option value="country_32">Cambodia             </option>
                  <option value="country_33">Cameroon             </option>
                  <option value="country_34">Cape Verde             </option>
                  <option value="country_35">Cayman Islands             </option>
                  <option value="country_36">Chad             </option>
                  <option value="country_37">Chile             </option>
                  <option value="country_38">China             </option>
                  <option value="country_39">Colombia             </option>
                  <option value="country_40">Congo             </option>
                  <option value="country_41">Cook Islands             </option>
                  <option value="country_42">Costa Rica             </option>
                  <option value="country_43">Cote D Ivoire             </option>
                  <option value="country_44">Croatia             </option>
                  <option value="country_45">Cruise Ship             </option>
                  <option value="country_46">Cuba             </option>
                  <option value="country_47">Cyprus             </option>
                  <option value="country_48">Czech Republic             </option>
                  <option value="country_49">Denmark             </option>
                  <option value="country_50">Djibouti             </option>
                  <option value="country_51">Dominica             </option>
                  <option value="country_52">Dominican Republic             </option>
                  <option value="country_53">Ecuador             </option>
                  <option value="country_54">Egypt             </option>
                  <option value="country_55">El Salvador             </option>
                  <option value="country_56">Equatorial Guinea             </option>
                  <option value="country_57">Estonia             </option>
                  <option value="country_58">Ethiopia             </option>
                  <option value="country_59">Falkland Islands             </option>
                  <option value="country_60">Faroe Islands             </option>
                  <option value="country_61">Fiji             </option>
                  <option value="country_62">Finland             </option>
                  <option value="country_63">France             </option>
                  <option value="country_64">French Polynesia             </option>
                  <option value="country_65">French West Indies             </option>
                  <option value="country_66">Gabon             </option>
                  <option value="country_67">Gambia             </option>
                  <option value="country_68">Georgia             </option>
                  <option value="country_69">Germany             </option>
                  <option value="country_70">Ghana             </option>
                  <option value="country_71">Gibraltar             </option>
                  <option value="country_72">Greece             </option>
                  <option value="country_73">Greenland             </option>
                  <option value="country_74">Grenada             </option>
                  <option value="country_75">Guam             </option>
                  <option value="country_76">Guatemala             </option>
                  <option value="country_77">Guernsey             </option>
                  <option value="country_78">Guinea             </option>
                  <option value="country_79">Guinea Bissau             </option>
                  <option value="country_80">Guyana             </option>
                  <option value="country_81">Haiti             </option>
                  <option value="country_82">Honduras             </option>
                  <option value="country_83">Hong Kong             </option>
                  <option value="country_84">Hungary             </option>
                  <option value="country_85">Iceland             </option>
                  <option value="country_86">India             </option>
                  <option value="country_87">Indonesia             </option>
                  <option value="country_88">Iran             </option>
                  <option value="country_89">Iraq             </option>
                  <option value="country_90">Ireland             </option>
                  <option value="country_91">Isle of Man             </option>
                  <option value="country_92">Israel             </option>
                  <option value="country_93">Italy             </option>
                  <option value="country_94">Jamaica             </option>
                  <option value="country_95">Japan             </option>
                  <option value="country_96">Jersey             </option>
                  <option value="country_97">Jordan             </option>
                  <option value="country_98">Kazakhstan             </option>
                  <option value="country_99">Kenya             </option>
                  <option value="country_100">Kuwait             </option>
                  <option value="country_101">Kyrgyz Republic             </option>
                  <option value="country_102">Laos             </option>
                  <option value="country_103">Latvia             </option>
                  <option value="country_104">Lebanon             </option>
                  <option value="country_105">Lesotho             </option>
                  <option value="country_106">Liberia             </option>
                  <option value="country_107">Libya             </option>
                  <option value="country_108">Liechtenstein             </option>
                  <option value="country_109">Lithuania             </option>
                  <option value="country_110">Luxembourg             </option>
                  <option value="country_111">Macau             </option>
                  <option value="country_112">Macedonia             </option>
                  <option value="country_113">Madagascar             </option>
                  <option value="country_114">Malawi             </option>
                  <option value="country_115">Malaysia             </option>
                  <option value="country_116">Maldives             </option>
                  <option value="country_117">Mali             </option>
                  <option value="country_118">Malta             </option>
                  <option value="country_119">Mauritania             </option>
                  <option value="country_120">Mauritius             </option>
                  <option value="country_121">Mexico             </option>
                  <option value="country_122">Moldova             </option>
                  <option value="country_123">Monaco             </option>
                  <option value="country_124">Mongolia             </option>
                  <option value="country_125">Montenegro             </option>
                  <option value="country_126">Montserrat             </option>
                  <option value="country_127">Morocco             </option>
                  <option value="country_128">Mozambique             </option>
                  <option value="country_129">Namibia             </option>
                  <option value="country_130">Nepal             </option>
                  <option value="country_131">Netherlands             </option>
                  <option value="country_132">Netherlands Antilles             </option>
                  <option value="country_133">New Caledonia             </option>
                  <option value="country_134">New Zealand             </option>
                  <option value="country_135">Nicaragua             </option>
                  <option value="country_136">Niger             </option>
                  <option value="country_137">Nigeria             </option>
                  <option value="country_138">Norway             </option>
                  <option value="country_139">Oman             </option>
                  <option value="country_140">Pakistan             </option>
                  <option value="country_141">Palestine             </option>
                  <option value="country_142">Panama             </option>
                  <option value="country_143">Papua New Guinea             </option>
                  <option value="country_144">Paraguay             </option>
                  <option value="country_145">Peru             </option>
                  <option value="country_146">Philippines             </option>
                  <option value="country_147">Poland             </option>
                  <option value="country_148">Portugal             </option>
                  <option value="country_149">Puerto Rico             </option>
                  <option value="country_150">Qatar             </option>
                  <option value="country_151">Reunion             </option>
                  <option value="country_152">Romania             </option>
                  <option value="country_153">Russia             </option>
                  <option value="country_154">Rwanda             </option>
                  <option value="country_155">Saint Pierre &amp; Miquelon             </option>
                  <option value="country_156">Samoa             </option>
                  <option value="country_157">San Marino             </option>
                  <option value="country_158">Satellite             </option>
                  <option value="country_159">Saudi Arabia             </option>
                  <option value="country_160">Senegal             </option>
                  <option value="country_161">Serbia             </option>
                  <option value="country_162">Seychelles             </option>
                  <option value="country_163">Sierra Leone             </option>
                  <option value="country_164">Singapore             </option>
                  <option value="country_165">Slovakia             </option>
                  <option value="country_166">Slovenia             </option>
                  <option value="country_167">South Africa             </option>
                  <option value="country_168">South Korea             </option>
                  <option value="country_169">Spain             </option>
                  <option value="country_170">Sri Lanka             </option>
                  <option value="country_171">St Kitts &amp; Nevis             </option>
                  <option value="country_172">St Lucia             </option>
                  <option value="country_173">St Vincent             </option>
                  <option value="country_174">St. Lucia             </option>
                  <option value="country_175">Sudan             </option>
                  <option value="country_176">Suriname             </option>
                  <option value="country_177">Swaziland             </option>
                  <option value="country_178">Sweden             </option>
                  <option value="country_179">Switzerland             </option>
                  <option value="country_180">Syria             </option>
                  <option value="country_181">Taiwan             </option>
                  <option value="country_182">Tajikistan             </option>
                  <option value="country_183">Tanzania             </option>
                  <option value="country_184">Thailand             </option>
                  <option value="country_185">Timor L'Este             </option>
                  <option value="country_186">Togo             </option>
                  <option value="country_187">Tonga             </option>
                  <option value="country_188">Trinidad &amp; Tobago             </option>
                  <option value="country_189">Tunisia             </option>
                  <option value="country_190">Turkey             </option>
                  <option value="country_191">Turkmenistan             </option>
                  <option value="country_192">Turks &amp; Caicos             </option>
                  <option value="country_193">Uganda             </option>
                  <option value="country_194">Ukraine             </option>
                  <option value="country_195">United Arab Emirates             </option>
                  <option value="country_196">United Kingdom             </option>
                  <option value="country_197">Uruguay             </option>
                  <option value="country_198">Uzbekistan             </option>
                  <option value="country_199">Venezuela             </option>
                  <option value="country_200">Vietnam             </option>
                  <option value="country_201">Virgin Islands (US)             </option>
                  <option value="country_202">Yemen             </option>
                  <option value="country_203">Zambia             </option>
                  <option value="country_204">Zimbabwe             </option>
                </select>
              </div>
              <!-- Street-->
              <div class="form-group">
                <label for="form_street" class="form-label">Street Address</label>
                <input name="name" id="form_street" class="form-control">
              </div>
              <!-- City + State-->
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="form_city" class="form-label">City</label>
                    <input name="name" id="form_city" class="form-control">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="form_state" class="form-label">State</label>
                    <input name="name" id="form_state" class="form-control">
                  </div>
                </div>
              </div>
              <!-- ZIP Code-->
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="form_zip" class="form-label">ZIP Code</label>
                    <input name="name" id="form_zip" class="form-control">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row form-block flex-column flex-sm-row">
            <div class="col text-center text-sm-left">
            </div>
            <div class="col text-center text-sm-right">
              <router-link to="step2" class="btn btn-primary px-3">Next step<i class="fa-chevron-right fa ml-2"></i></router-link>
            </div>
          </div>
        </form>
      </div>
    </section>
	</div>
</template>