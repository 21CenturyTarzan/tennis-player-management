@extends('home')

@section('scripts')
@parent

<script>
$(function() {
    $('#loginModal').modal({
        show: true
    });
});
</script>
@endsection