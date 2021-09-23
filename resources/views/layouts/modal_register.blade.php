<div class="modal fade" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="registerModal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <img src="{{asset('images/icon-signup.png')}}" alt="" width="30" height="30">
                <h5 class="modal-title ml-2" id="registerModal">{{ __('Sign up') }}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body">
                <form method="POST" id="registerForm">
                    @csrf

                    <div class="form-group row">
                        <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('性名') }}</label>
                        <div class="col-md-8">
                            <input id="name" type="text" class="form-control" name="name" value="{{ old('name') }}"  autocomplete="name" placeholder="性名" required autofocus >
                            <span class="invalid-feedback" role="alert" id="nameError">
                                <strong></strong>
                            </span>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="type" class="col-md-4 col-form-label text-md-right">{{ __('選手 / 親') }}</label>
                        <div class="col-md-8">
                            <select id="user_type" name="user_type" class="form-control form-select" aria-label="Default select example">
                                <option value="player" selected>選手</option>
                                <option value="parent">親</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="emailInput" class="col-md-4 col-form-label text-md-right">{{ __('メール') }}</label>
                        <div class="col-md-8">
                            <input id="emailInput" type="email" class="form-control" name="email" value="{{ old('email') }}"  autocomplete="email" placeholder="メール" required>
                            <span class="invalid-feedback" role="alert" id="emailError">
                                <strong></strong>
                            </span>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="passwordInput" class="col-md-4 col-form-label text-md-right">{{ __('パスワード') }}</label>

                        <div class="col-md-8">
                            <input id="passwordInput" type="password" class="form-control" name="password" autocomplete="new-password" placeholder="パスワード" required>

                            <span class="invalid-feedback" role="alert" id="passwordError">
                                <strong></strong>
                            </span>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="password-confirm" class="col-md-4 col-form-label text-md-right">{{ __('認証する') }}</label>

                        <div class="col-md-8">
                            <input id="password-confirm" type="password" class="form-control" name="password_confirmation" autocomplete="new-password" placeholder="認証する" required>
                        </div>
                    </div>

                    <div class="form-group row mb-0">
                        <div class="col-md-8 offset-md-4">
                            <button type="submit" class="btn btn-primary">
                                {{ __('SIGN UP') }}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>


@section('scripts')
@parent

<script>
$(function () {

    $('#registerForm').submit(function (e) {
        e.preventDefault();
        let formData = $(this).serializeArray();
        $(".invalid-feedback").children("strong").text("");
        $("#registerForm input").removeClass("is-invalid");
        $.ajax({
            method: "POST",
            headers: {
                Accept: "application/json"
            },
            url: "{{ route('register') }}",
            data: formData,
            success: () => window.location.assign("{{ route('account.home') }}"),
            error: (response) => {
                if(response.status === 422) {
                    let errors = response.responseJSON.errors;
                    Object.keys(errors).forEach(function (key) {
                        $("#" + key + "Input").addClass("is-invalid");
                        $("#" + key + "Error").children("strong").text(errors[key][0]);
                    });
                } else {
                    window.location.reload();
                }
            }
        })
    });
})
</script>
@endsection