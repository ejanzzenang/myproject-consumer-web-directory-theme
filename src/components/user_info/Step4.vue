<template>
	<div class="user-step4">
      <div style="height: 8px; top: 71px;" class="progress rounded-0 sticky-top">
        <div role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" class="progress-bar"></div>
      </div>
	    <section class="py-5">
      <div class="container">
        <p class="subtitle text-primary">Add new listing</p>
        <h1 class="h2 mb-5"> Photos <span class="text-muted float-right">Step 4</span>      </h1>
        <div class="row form-block">
          <div class="col-lg-4">
            <h4>Photos</h4>
            <p class="text-muted text-sm">His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table.</p>
          </div>
          <div class="col-lg-7 ml-auto">
            <div class="form-group">           
              <form id="demo-upload" action="/upload" class="dropzone">
                <div class="dz-message text-muted">
                  <p>Drop files here or click to upload.</p>
                  <p><span class="note">(This is just a demo dropzone. Selected files are <STRONG>not</STRONG> actually uploaded.)</span></p>
                </div>
              </form>
            </div>
            <div id="dropzoneTemplate" class="d-none">
              <div class="dz-preview dz-file-preview">
                <div class="dz-image"><img data-dz-thumbnail="" alt="" src="img/logo-square.svg"></div>
                <div class="dz-details">
                  <div class="dz-filename"><span data-dz-name=""></span></div>
                  <div data-dz-size="" class="dz-size"></div>
                </div>
                <div class="dz-progress"><span data-dz-uploadprogress="" class="dz-upload"></span></div>
                <div class="dz-success-mark"><span class="dz-icon"><i class="fa-check fa"></i></span></div>
                <div class="dz-error-mark"><span class="dz-icon"><i class="fa-times fa"></i></span></div>
                <div class="dz-error-message"><span data-dz-errormessage=""></span></div>
              </div>
            </div>
          </div>
        </div>
         <div class="row form-block flex-column flex-sm-row">
            <div class="col text-center text-sm-left"><router-link to="step3" class="btn btn-link text-muted"><i class="fa-chevron-left fa mr-2"></i>Back</router-link>
            </div>
            <div class="col text-center text-sm-right"><router-link to="step5" class="btn btn-primary px-3">Finish<i class="fa-chevron-right fa ml-2"></i></router-link></div>
        </div>
      </div>
    </section>
	</div>
</template>