@extends('home')

@section('scripts')
@parent

<script>
$(function() {
    $('#registerModal').modal({
        show: true
    });
});
</script>
@endsection