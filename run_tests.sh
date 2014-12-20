succeded=0
total=0

for case in $(cd tests; ls *.js)
do
    case_expected_output_path=tests/expected/$(echo $case | sed -r "s/(.*)\.js$/\1.out/");
	case_expected_output=$(cat $case_expected_output_path);
	case_actual_output=$(nodejs tests/$case);
	if [ "$case_expected_output" == "$case_actual_output" ]
	then
	    echo "OK    => $case";
	    succeded=$(($succeded + 1));
	else
	    echo "FAIL! => $case"
	    echo "    expected:"
	    echo "$case_expected_output" | while read l; do echo "        $l"; done;
	    echo "    actual:"
	    echo "$case_actual_output" | while read l; do echo "        $l"; done;
	fi;
    total=$(($total + 1));
done;
echo Result: $succeded/$total tests succeeded.
