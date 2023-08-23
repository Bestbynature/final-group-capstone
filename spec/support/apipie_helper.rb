# frozen_string_literal: true

module ApipieRecorderPatch
  def record
    super.try(:merge, title: RSpec.current_example.metadata[:doc_title] || RSpec.current_example.example_group.description)
  end
end

class Apipie::Extractor::Recorder
  prepend ApipieRecorderPatch
end
